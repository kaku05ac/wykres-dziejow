/* World history chart — interactive radial Bible chronology.
   Vanilla JS port of the Claude Design prototype `Biblical Chronology Chart.dc.html`.
   Data (COL, PAT, KINGS, NAT, EV, ERAS, FIG) lives in data.js. */
(() => {
  'use strict';

  // ── Geometry ──────────────────────────────────────────────
  // Creation sits at the top. Genesis 1–11 (counted from Creation, not dated) fills the
  // first 70°, dated BC years the next 120° and AD years the next 95°.
  const ang = y => (y <= SEAM ? (y - START) / (SEAM - START) * 70 : y <= 0 ? 70 + (y - SEAM) / -SEAM * 120 : 190 + y / END * 95);
  const pt = (r, a) => { const t = a * Math.PI / 180; return [r * Math.sin(t), -r * Math.cos(t)]; };
  const f1 = n => n.toFixed(1);
  // Years before the seam are counted from Creation (AM); later ones are BC/AD.
  const amText = y => 'AM ' + Math.max(1, Math.round(y - START));
  // Language: Polish by default, English on request (see i18n.js). U() is the current wording.
  let LANG = 'pl';
  const U = () => UI[LANG];
  const fmt = y => (y < SEAM ? amText(y) : y < 0 ? U().bc(-y) : y === 0 ? U().bc(1) : U().ad(y));
  // Polish plural of "rok" for a number of years: 1 rok, 2–4 lata (not 12–14), otherwise lat.
  const lat = n => U().years(n);
  // Dates of people and events: approximate before 722 BC and around the birth of Christ.
  const fmtD = y => ((y >= SEAM && y < -722) || (y > -10 && y < 40) ? U().approx : '') + fmt(y);
  const evWhen = v => v[4] || fmtD(v[1]);
  // End a sentence with one full stop, even when it ends in an abbreviation like "p.n.e.".
  const dot = t => (t.endsWith('.') ? t : t + '.');
  // A date that starts a new sentence ("Ok. 1250 p.n.e.").
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  // Text on the left half reads top to bottom; the chart ends near 285°, so the flip runs to 300° and every
  // name and date on the left side reads the same way.
  const uprightRot = a => (a > 90 && a < 300 ? a + 180 : a);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Lifespan arcs: Genesis 1–11 steps outward one track per person; from Abraham on the
  // tracks step back inward, in order of birth, so the line reads as one staircase.
  const PAT_R = (() => {
    const r = [], dated = PAT.map((p, i) => [p[1], i]).filter(([y]) => y >= SEAM).sort((a, b) => a[0] - b[0]);
    PAT.forEach((p, i) => { if (p[1] < SEAM) r[i] = 352 + i * 10; });
    dated.forEach(([, i], k) => { r[i] = 542 - k * 10; });
    return r;
  })();
  COL.king2 = ['#e6dcd6', '#7b5b4a', ''];
  const KING_SHADE = (() => { const n = { ju: 0, is: 0 }; return KINGS.map(k => (n[k[3] === 'is' ? 'is' : 'ju']++ % 2 ? 'king2' : 'king')); })();

  // Faint pie slices behind everything, one per testament band, from the hub to the outer circle.
  // All three start in one neutral shade; each takes its own colour up to the slider's year.
  const slice = (a1, a2, cls) => {
    if (a2 - a1 < 0.05) return '';
    const big = a2 - a1 > 180 ? 1 : 0, R = 650, r0 = 52;
    const [ox1, oy1] = pt(R, a1), [ox2, oy2] = pt(R, a2), [ix2, iy2] = pt(r0, a2), [ix1, iy1] = pt(r0, a1);
    return `<path class="pie ${cls}" d="M${f1(ox1)} ${f1(oy1)}A${R} ${R} 0 ${big} 1 ${f1(ox2)} ${f1(oy2)}L${f1(ix2)} ${f1(iy2)}A${r0} ${r0} 0 ${big} 0 ${f1(ix1)} ${f1(iy1)}Z"/>`;
  };
  const pieBase = TESTAMENTS.map(([from, to]) => slice(ang(from), ang(to), 'pie-base')).join('');

  const FULL_VIEW = { cx: 0, cy: 0, w: 1500 };
  const MIN_W = 200, MAX_W = 1500;

  // ── State ─────────────────────────────────────────────────
  const state = { year: START, playing: false, stopAt: END, rate: 89, view: { ...FULL_VIEW }, hover: null, sel: null };
  let tween = null, drag = null, dirty = true;
  let FIG_R = null;
  const set = patch => { Object.assign(state, typeof patch === 'function' ? patch(state) : patch); dirty = true; };
  const flyTo = b => { tween = { t: 0, a: { ...state.view }, b }; };

  // ── DOM ───────────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const svg = $('chart');
  const el = {
    ruler: $('ruler'), arcs: $('arcs'), arcLabels: $('arcLabels'), dots: $('dots'), figs: $('figs'),
    pie: $('pie'), sweep: $('sweep'), sweepDot: $('sweepDot'), hubYear: $('hubYear'), hubSub: $('hubSub'),
    askCtx: $('askCtx'), askYear: $('askYear'),
    yearLabel: $('yearLabel'), aliveYear: $('aliveYear'), play: $('play'), playLabel: $('playLabel'),
    cardTitle: $('cardTitle'), cardBody: $('cardBody'), cardRef: $('cardRef'),
    alive: $('alive'), eventList: $('eventList'), eras: $('eras'), legend: $('legend'),
    reel: $('reel'), reelTrack: $('reelTrack'), reelText: $('reelText'), capMeta: $('capMeta'), capTitle: $('capTitle'), capBody: $('capBody')
  };
  const cache = new Map();
  const put = (node, prop, value) => {
    const k = cache.get(node) || {};
    if (k[prop] === value) return;
    k[prop] = value; cache.set(node, k);
    if (prop === 'html') node.innerHTML = value; else if (prop === 'text') node.textContent = value; else node.setAttribute(prop, value);
  };

  // Static ruler: Creation, every 500 years from Creation through Genesis 1–11, the seam
  // where dated history begins, then every 500 years BC/AD.
  const buildRuler = () => {
    const ticks = [[START, U().creation], [am(500), 'AM 500'], [am(1000), 'AM 1000'], [am(1500), 'AM 1500'], [SEAM, fmtD(SEAM)]];
    for (let y = -1500; y <= 2000; y += 500) ticks.push([y, y === 0 ? '0' : fmt(y)]);
    let html = '';
    ticks.forEach(([y, text]) => {
      const a = ang(y), seam = y === SEAM, [x1, y1] = pt(seam ? 82 : 342, a), [x2, y2] = pt(606, a), [x3, y3] = pt(630, a);
      html += `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${seam ? '#b3afb1' : '#e3dfe1'}" stroke-width=".6"${seam ? ' stroke-dasharray="4 4"' : ''}/>`;
      html += `<text class="tick-label" x="${f1(x3)}" y="${f1(y3)}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${f1(uprightRot(a))} ${f1(x3)} ${f1(y3)})">${text}</text>`;
    });
    // Testament bands around the outside: Old Testament, New Testament, Church history.
    TESTAMENTS.forEach(([from, to], k) => {
      const a1 = ang(from), a2 = ang(to), R = 716, [sx, sy] = pt(R, a1 + 0.4), [ex, ey] = pt(R, a2 - 0.4);
      html += `<path class="testament-line" d="M${f1(sx)} ${f1(sy)}A${R} ${R} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${f1(ex)} ${f1(ey)}"/>`;
      [a1 + 0.4, a2 - 0.4].forEach(a => { const [t1x, t1y] = pt(R - 5, a), [t2x, t2y] = pt(R + 5, a); html += `<line class="testament-line" x1="${f1(t1x)}" y1="${f1(t1y)}" x2="${f1(t2x)}" y2="${f1(t2y)}"/>`; });
      const am = (a1 + a2) / 2, [lx, ly] = pt(R + 14, am);
      html += `<text class="testament-label" x="${f1(lx)}" y="${f1(ly)}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${f1(uprightRot(am))} ${f1(lx)} ${f1(ly)})">${esc(U().testaments[k])}</text>`;
    });
    el.ruler.innerHTML = html;
  };
  buildRuler();

  // Side-panel pieces (rebuilt when the language changes).
  let eventButtons = [], lastEvLine = '';
  const buildStatic = () => {
    el.eras.innerHTML = ERAS.map((e, i) => `<button type="button" class="chip" data-era="${i}">${esc(e[0])}</button>`).join('');
    // Numbered rows; the current one carries a line that grows as its section plays.
    el.eventList.innerHTML = EV.map((v, i) => `<button type="button" class="event" data-ev="${i}"><span class="ev-num">${String(i + 1).padStart(2, '0')}</span><span class="ev-name">${esc(v[0])}</span><span class="when">${esc(evWhen(v))}</span><span class="ev-line" aria-hidden="true"></span></button>`).join('');
    lastEvLine = '';
    eventButtons = [...el.eventList.children];
    // Legend: the colour of every family line drawn on the chart (patriarchs share Shem's colour).
    const L = U().legend, sw = k => `<span class="swatch" style="background:${COL[k][0]};border-color:${COL[k][1]}"></span>`;
    // First row: the peoples (Genesis 10) and the patriarchs; second row: the Church.
    el.legend.innerHTML = `<div class="legend-row">`
      + ['cain', 'sem', 'ham', 'jap'].map(k => `<span>${sw(k)}${esc(COL[k][2])}</span>`).join('')
      + `<span>${sw('pat')}${esc(L.patLine)}</span><span>${sw('king')}${esc(COL.king[2])}</span></div>`
      + `<div class="legend-row">` + ['chu', 'orth', 'ref'].map(k => `<span>${sw(k)}${esc(COL[k][2])}</span>`).join('') + `</div>`;
  };
  buildStatic();

  // Event reel: a column of blocks down the left of the chart, one per event, right edges
  // aligned and widths staggered. A block shows images/events/<EV_IDS id>.(jpg|png|webp) when
  // there is one, otherwise a flat grey. Each block holds a 9:16 scene centred in it.
  const EXTS = ['jpg', 'jpeg', 'png', 'webp'];
  const REEL_W = [118, 134, 104, 142, 126, 112, 138, 98, 130, 120, 108, 144, 116, 132, 124];
  const REEL_GREY = ['#d9d5d7', '#c7c3c5', '#e4e1e3', '#b6b2b4', '#cfcbcd', '#dedadc', '#bdb9bb', '#d3cfd1', '#c2bec0', '#e0dcde', '#b9b5b7', '#cbc7c9', '#d6d2d4', '#c5c1c3', '#dcd8da'];
  // Films for events, by EV_IDS id.
  const VIDEOS = { creation: 'images/events/creation.mp4', 'the-flood': 'images/events/the-flood.mp4', 'tower-of-babel': 'images/events/tower-of-babel.mp4', 'binding-of-isaac': 'images/events/binding-of-isaac.mp4', 'the-exodus': 'images/events/the-exodus.mp4', 'kingdom-divides': 'images/events/kingdom-divides.mp4', 'return-from-exile': 'images/events/return-from-exile.mp4', 'crucifixion-and-pentecost': 'images/events/crucifixion-and-pentecost.mp4', 'fall-of-rome': 'images/events/fall-of-rome.mp4', reformation: 'images/events/reformation.mp4' };
  // A film covers its event's stretch of the timeline: from the event to the next one.
  const segEnd = i => (i + 1 < EV.length ? EV[i + 1][1] : END);
  const filmAt = i => { const v = slots[i] && slots[i].querySelector('video'); return v && slots[i].classList.contains('has-img') && isFinite(v.duration) && v.duration > 0 ? v : null; };
  const filmPos = (i, year) => clamp((year - EV[i][1]) / (segEnd(i) - EV[i][1]), 0, 1);
  const slots = EV.map((v, i) => {
    const s = EV_IDS[i];
    const div = document.createElement('button');
    div.type = 'button';
    div.className = 'art-slot';
    div.dataset.ev = i;
    div.setAttribute('aria-label', `${v[0]}, ${evWhen(v)}`);
    div.style.setProperty('--w', REEL_W[i % REEL_W.length] + 'px');
    div.style.setProperty('--shade', REEL_GREY[i % REEL_GREY.length]);
    div.innerHTML = '<div class="scene"></div>';
    const scene = div.firstChild;
    // Events with a film play it silently, once, and stay on its last frame.
    if (VIDEOS[s]) {
      const vid = document.createElement('video');
      vid.muted = true; vid.playsInline = true; vid.preload = 'auto';
      vid.setAttribute('muted', ''); vid.setAttribute('playsinline', ''); vid.setAttribute('aria-hidden', 'true');
      // iPhone Safari may only load metadata, so either signal counts as ready.
      const ready = () => { div.classList.add('has-img'); dirty = true; };
      vid.addEventListener('loadeddata', ready, { once: true });
      vid.addEventListener('loadedmetadata', ready, { once: true });
      // MP4 (H.264) is what iPhone and most browsers play best; browsers without H.264 get the WebM.
      const mp4 = VIDEOS[s], webm = mp4.replace(/\.mp4$/, '.webm');
      const url = vid.canPlayType('video/mp4; codecs="avc1.640028"') ? mp4 : webm;
      const type = url === mp4 ? 'video/mp4' : 'video/webm';
      // Download the whole film and play it from memory. Safari (iPhone above all) refuses to play
      // a video from a server that cannot send it in parts; a blob avoids that. Fall back to the link.
      fetch(url).then(r => (r.ok ? r.blob() : Promise.reject(r.status)))
        .then(b => { vid.src = URL.createObjectURL(new Blob([b], { type })); })
        .catch(() => { vid.src = url; })
        .finally(() => vid.load());
      // Show the first frame once the film is known (Safari leaves it black otherwise).
      vid.addEventListener('loadedmetadata', () => { if (vid.currentTime === 0 && vid.paused) vid.currentTime = 0.001; }, { once: true });
      scene.appendChild(vid);
      el.reelTrack.appendChild(div);
      return div;
    }
    const img = new Image();
    img.alt = v[0];
    img.decoding = 'async';
    let ext = 0;
    img.onload = () => { div.classList.add('has-img'); scene.prepend(img); dirty = true; };
    img.onerror = () => { if (++ext < EXTS.length) img.src = `images/events/${s}.${EXTS[ext]}`; };
    img.src = `images/events/${s}.${EXTS[0]}`;
    el.reelTrack.appendChild(div);
    return div;
  });
  el.reelTrack.addEventListener('pointerover', e => { if (reelScrolled) return; const b = e.target.closest('[data-ev]'); const k = b ? 'e' + b.dataset.ev : null; if (k !== state.hover) set({ hover: k }); });
  // The track itself ignores the pointer, so watch for the pointer leaving every block.
  el.reelTrack.addEventListener('pointerout', e => {
    const to = e.relatedTarget;
    if (!(to && to.closest && to.closest('.art-slot')) && state.hover && state.hover[0] === 'e') set({ hover: null });
  });
  // Scrolling the reel steps through the events: the slider, chart, text and films follow.
  let reelScrolled = false;
  el.reel.addEventListener('mousemove', e => { if (e.movementX || e.movementY) reelScrolled = false; });
  const stepEvent = dir => {
    let ci = 0; EV.forEach((v, i) => { if (state.year >= v[1]) ci = i; });
    const i = clamp(ci + dir, 0, EV.length - 1);
    if (i !== ci || state.playing) set({ year: EV[i][1], playing: false, sel: 'e' + i, hover: null });
    reelScrolled = true;                                // ignore hover until the mouse really moves
  };
  let wheelAcc = 0, wheelLock = 0;
  el.reel.addEventListener('wheel', e => {
    e.preventDefault();
    const now = performance.now();
    if (now < wheelLock) return;                       // one step per flick, not one per wheel tick
    wheelAcc += e.deltaY;
    if (Math.abs(wheelAcc) >= 24) { stepEvent(wheelAcc > 0 ? 1 : -1); wheelAcc = 0; wheelLock = now + 90; }
  }, { passive: false });
  let swipe = null;
  el.reel.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') swipe = { y: e.clientY }; });
  el.reel.addEventListener('pointermove', e => {
    if (!swipe) return;
    const dy = e.clientY - swipe.y;
    if (Math.abs(dy) >= 30) { stepEvent(dy < 0 ? 1 : -1); swipe.y = e.clientY; }
  });
  ['pointerup', 'pointercancel'].forEach(t => el.reel.addEventListener(t, () => { swipe = null; }));
  el.reelTrack.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault(); stepEvent(e.key === 'ArrowDown' ? 1 : -1);
      requestAnimationFrame(() => { const c = el.reelTrack.querySelector('.art-slot.is-current'); if (c) c.focus({ preventScroll: true }); });
    }
  });
  el.reelTrack.addEventListener('click', e => {
    const b = e.target.closest('[data-ev]'); if (!b) return;
    const i = +b.dataset.ev, v = EV[i];
    // Clicking a block plays its section: from the event to the next one, film included.
    // Stop just short of the next event, so this block stays current on its last frame.
    set({ year: v[1], playing: true, stopAt: segEnd(i) - 0.6, rate: PLAY_RATE, sel: 'e' + i, hover: null });
    flyToYear(v[1]);
  });

  // ── Layered timeline dock ─────────────────────────────────
  // Lanes share the chart's time scale (so Genesis 1–11 is compressed the same way) and
  // one playhead. Close dots merge into a numbered bubble. Click a dot to jump to it;
  // drag anywhere on the lanes to scrub.
  const flyToYear = y => { const [x, yy] = pt(y < -3000 ? 330 : 300, ang(y)); flyTo({ cx: x, cy: yy, w: 520 }); };
  const dock = (() => {
    const svgD = $('dockSvg');
    const A_MAX = ang(END), RULER = 22;
    const yearFromA = a => (a <= 70 ? START + a / 70 * (SEAM - START) : a <= 190 ? SEAM + (a - 70) / 120 * -SEAM : (a - 190) / 95 * END);
    let W = 0, x0 = 0, x1 = 1, open = true, dots = [], head = null, lastX = null, drag = null;
    const xOf = y => x0 + ang(y) / A_MAX * (x1 - x0);
    const yearOf = x => clamp(Math.round(yearFromA(clamp((x - x0) / (x1 - x0), 0, 1) * A_MAX)), START, END);
    const patEnd = p => (p[1] < SEAM ? Math.min(p[1] + p[2], SEAM) : p[1] + p[2]);

    const lanes = () => {
      const L = [{ label: U().lanes.events, kind: 'dots', h: 30, cls: 'dk-head', toggle: true,
        items: EV.map((v, i) => ({ y: v[1], key: 'e' + i, name: v[0], when: evWhen(v), color: '#4d3340' })) }];
      if (open) {
        L.push({ label: U().lanes.figures, kind: 'dots', h: 24, cls: 'dk-sub',
          items: FIG.map((g, i) => ({ y: g[1], key: 'f' + i, name: g[0], when: fmtD(g[1]), color: COL[g[5]][1] })) });
        L.push({ label: U().lanes.patriarchs, kind: 'dots', h: 24, cls: 'dk-sub',
          items: PAT.map((p, i) => ({ y: p[1], key: 'p' + i, name: p[0], when: U().born + fmtD(p[1]), color: COL.pat[1] })) });
        L.push({ label: U().lanes.kings, kind: 'dots', h: 24, cls: 'dk-sub',
          items: KINGS.map((k, i) => ({ y: k[1], key: 'k' + i, name: k[0], when: fmtD(k[1]), color: COL.king[1] })) });
        L.push({ label: U().lanes.alive, kind: 'area', h: 32, cls: 'dk-sub' });
      }
      L.push({ label: U().lanes.nations, kind: 'dots', h: 30, cls: 'dk-head',
        items: NAT.map((n, i) => ({ y: n[2], key: 'n' + i, name: n[0], when: n[2] === SEAM ? U().beforeSeamLower : n[2] < SEAM ? U().fromCain : U().from + fmtD(n[2]), color: COL[n[1]][1] })) });
      const chItem = (c, i) => ({ y: c[1], key: 'c' + i, name: c[0], when: fmt(c[1]), color: COL[c[4] || 'chu'][1] });
      L.push({ label: U().lanes.church, kind: 'dots', h: 26, cls: 'dk-sub',
        items: CH_EV.map(chItem).filter((_, i) => !CH_EV[i][4]) });
      L.push({ label: U().lanes.history, kind: 'dots', h: 26, cls: 'dk-sub',
        items: CH_EV.map(chItem).filter((_, i) => CH_EV[i][4]) });
      return L;
    };

    const build = () => {
      W = svgD.getBoundingClientRect().width;
      if (!W) return;
      const narrow = W < 600, labelW = narrow ? 120 : 132;
      x0 = labelW + 10; x1 = W - 18;
      let y = RULER, out = '';
      const ticks = narrow ? [[START, U().creation], [SEAM, fmtD(SEAM)], [0, '0'], [END, fmt(END)]]
        : [[START, U().creation], [am(1000), 'AM 1000'], [SEAM, fmtD(SEAM)], [-1000, fmt(-1000)], [0, '0'], [1000, fmt(1000)], [END, fmt(END)]];
      // Skip a tick label that would run into the one before it.
      let prevEnd = -Infinity;
      ticks.forEach(([t, label], k) => {
        const x = xOf(t), w = label.length * 6.4, anchor = k === 0 ? 'start' : k === ticks.length - 1 ? 'end' : 'middle';
        const left = anchor === 'start' ? x : anchor === 'end' ? x - w : x - w / 2;
        if (left < prevEnd + 8) return;
        prevEnd = left + w;
        out += `<text class="dk-tick" x="${f1(x)}" y="12" text-anchor="${anchor}">${label}</text>`;
      });
      // Testament strip: a thin bracket per testament, labelled where it fits.
      TESTAMENTS.forEach(([from, to], k) => {
        const a = xOf(from) + 1, b = xOf(to) - 1, ty = RULER + 6;
        out += `<line class="dk-testament" x1="${f1(a)}" y1="${ty}" x2="${f1(b)}" y2="${ty}"/><line class="dk-testament" x1="${f1(a)}" y1="${ty - 3}" x2="${f1(a)}" y2="${ty + 3}"/><line class="dk-testament" x1="${f1(b)}" y1="${ty - 3}" x2="${f1(b)}" y2="${ty + 3}"/>`;
        const full = U().testaments[k], label = full.length * 6 < b - a - 8 ? full : U().testamentsShort[k];
        out += `<text class="dk-testament-label" x="${f1((a + b) / 2)}" y="${ty + 11}" text-anchor="middle"><title>${esc(full)}</title>${esc(label)}</text>`;
      });
      y += 22;
      const behind = out.length;
      lanes().forEach(l => {
        const cy = y + l.h / 2, head = l.cls === 'dk-head', lab = `dk-label${head ? ' dk-strong' : ''}`;
        if (l.toggle) {
          const caret = open ? `M13 ${cy - 2}L16.5 ${cy + 1.5}L20 ${cy - 2}` : `M15 ${cy - 3.5}L18.5 ${cy}L15 ${cy + 3.5}`;
          out += `<g class="dk-toggle" data-toggle="1"><title>${U().toggle(open)}</title><rect x="0" y="${y}" width="${labelW}" height="${l.h}" fill="transparent"/><path class="dk-caret" d="${caret}"/><text class="${lab}" x="28" y="${cy}">${l.label}</text></g>`;
        } else {
          out += `<text class="${lab}" x="28" y="${cy}">${l.label}</text>`;
        }
        if (l.kind === 'dots') {
          out += `<line class="dk-line" x1="${f1(x0)}" y1="${cy}" x2="${f1(x1)}" y2="${cy}"/>`;
          const groups = [];
          l.items.map(it => ({ ...it, x: xOf(it.y) })).sort((a, b) => a.x - b.x).forEach(it => {
            const g = groups[groups.length - 1];
            if (g && it.x - g[0].x < (narrow ? 14 : 11)) g.push(it); else groups.push([it]);
          });
          groups.forEach(g => {
            const f = g[0], tip = esc(g.map(it => `${it.name} · ${it.when}`).join('\n'));
            if (g.length === 1) {
              out += `<g class="dk-dot" data-x="${f1(f.x)}" data-y="${f.y}" data-key="${f.key}" data-ask="${tip}"><title>${tip}</title>`
                + `<circle cx="${f1(f.x)}" cy="${cy}" r="9" fill="transparent"/><circle class="dk-mark" cx="${f1(f.x)}" cy="${cy}" r="3" fill="${f.color}"/></g>`;
            } else {
              const gx = g.reduce((sum, it) => sum + it.x, 0) / g.length, col = g.every(it => it.color === f.color) ? f.color : '#a29fa1';
              out += `<g class="dk-dot" data-x="${f1(f.x)}" data-y="${f.y}" data-ask="${tip}"><title>${tip}</title>`
                + `<circle class="dk-mark" cx="${f1(gx)}" cy="${cy}" r="${g.length > 9 ? 8.5 : 7}" fill="${col}"/><text class="dk-count" x="${f1(gx)}" y="${cy + 0.5}"${g.length > 9 ? ' style="font-size:7.5px"' : ''}>${g.length}</text></g>`;
            }
          });
        } else {
          // Stacked areas: nations alive (darker), plus patriarchs alive on top (lighter).
          const N = 180, top = y + 6, base = y + l.h - 4;
          const nat = [], all = []; let max = 1;
          for (let k = 0; k <= N; k++) {
            const x = x0 + (x1 - x0) * k / N, t = yearFromA(k / N * A_MAX);
            const a = NAT.filter(n => t >= n[2] && t <= n[3]).length, b = PAT.filter(p => t >= p[1] && t <= patEnd(p)).length;
            nat.push([x, a]); all.push([x, a + b]); max = Math.max(max, a + b);
          }
          const area = pts => `M${f1(x0)} ${base}` + pts.map(([x, v]) => `L${f1(x)} ${f1(base - v / max * (base - top))}`).join('') + `L${f1(x1)} ${base}Z`;
          out += `<path class="dk-area-pat" d="${area(all)}"><title>${U().alivePat}</title></path><path class="dk-area-nat" d="${area(nat)}"><title>${U().aliveNat}</title></path>`;
        }
        y += l.h;
      });
      // The seam goes behind the lanes so it never crosses a dot.
      out = out.slice(0, behind) + `<line class="dk-seam" x1="${f1(xOf(SEAM))}" y1="${RULER}" x2="${f1(xOf(SEAM))}" y2="${y}"/>` + out.slice(behind);
      out += `<g id="dkHead"><line class="dk-head-line" x1="0" y1="${RULER - 2}" x2="0" y2="${y}"/><circle class="dk-head-cap" cx="0" cy="${RULER - 2}" r="3"/></g>`;
      const H = y + 6;
      svgD.setAttribute('viewBox', `0 0 ${W} ${H}`);
      svgD.style.height = H + 'px';
      svgD.innerHTML = out;
      dots = [...svgD.querySelectorAll('.dk-dot')].map(n => [n, +n.dataset.x]);
      head = svgD.querySelector('#dkHead');
      lastX = null;
    };

    const update = year => {
      if (!head) return;
      const x = xOf(year);
      if (lastX !== null && Math.abs(x - lastX) < 0.05) return;
      lastX = x;
      head.setAttribute('transform', `translate(${f1(x)} 0)`);
      dots.forEach(([n, dx]) => n.classList.toggle('future', dx > x + 0.5));
      svgD.setAttribute('aria-valuenow', Math.round(year));
      svgD.setAttribute('aria-valuetext', fmt(Math.round(year)));
    };

    const localX = e => { const r = svgD.getBoundingClientRect(); return (e.clientX - r.left) * W / r.width; };
    svgD.addEventListener('pointerdown', e => {
      svgD.dataset.pointer = '1';
      if (e.target.closest('[data-toggle]')) { open = !open; build(); dirty = true; return; }
      const dot = e.target.closest('.dk-dot'), x = localX(e);
      if (!dot && x < x0 - 6) return;
      drag = { cx: e.clientX, dot, moved: false };
      svgD.setPointerCapture(e.pointerId);
      if (!dot) set({ year: yearOf(x), playing: false, sel: null });
    });
    svgD.addEventListener('pointermove', e => {
      if (!drag) return;
      if (Math.abs(e.clientX - drag.cx) > 3) drag.moved = true;
      if (drag.moved || !drag.dot) set({ year: yearOf(localX(e)), playing: false, sel: null });
    });
    const end = e => {
      if (drag && drag.dot && !drag.moved && e.type === 'pointerup') {
        const key = drag.dot.dataset.key, y0 = +drag.dot.dataset.y;
        // Arcs need a few years of length before they exist, so step just past their start.
        const y = key && (key[0] === 'p' || key[0] === 'n') ? y0 + 3 : key && key[0] === 'k' ? y0 + 0.3 : y0;
        set({ year: y, playing: false, sel: key || null });
        flyToYear(y0);
        // Put a question about the clicked mark into the chat, ready to send.
        if (drag.dot.dataset.ask) ask.prefill(drag.dot.dataset.ask.split('\n'));
      }
      drag = null;
    };
    svgD.addEventListener('pointerup', end);
    svgD.addEventListener('pointercancel', end);
    svgD.addEventListener('keydown', e => {
      delete svgD.dataset.pointer;
      const step = e.shiftKey ? 100 : 10;
      const d = { ArrowRight: step, ArrowUp: step, ArrowLeft: -step, ArrowDown: -step }[e.key];
      if (d) { e.preventDefault(); set(s => ({ year: clamp(Math.round(s.year) + d, START, END), playing: false, sel: null })); }
      else if (e.key === 'Home' || e.key === 'End') { e.preventDefault(); set({ year: e.key === 'Home' ? START : END, playing: false, sel: null }); }
    });
    new ResizeObserver(() => { build(); dirty = true; }).observe(svgD.parentNode);
    build();
    return { update, build };
  })();

  // ── Render ────────────────────────────────────────────────
  const render = () => {
    const { year, playing, view, hover, sel } = state;
    const focus = k => sel === k || hover === k;
    const items = {};
    let arcs = '', arcLabels = '';

    // A band from angle a1 to a2, w wide, with fully rounded (pill) ends: the shape is drawn
    // inset by the corner radius (here half the width) and then stroked with round joins in the
    // same colour, so it still starts and ends exactly at its years. Very short bands become a dot.
    // round = 0 gives square ends (the kings' ring, where reigns follow one another without gaps).
    const band = (r, w, a1, a2, color, on, cls = 'arc-line', round = 0.5) => {
      const rc = w * round, ro = r + w / 2 - rc, ri = r - w / 2 + rc, da = rc / r * 180 / Math.PI;
      let b1 = a1 + da, b2 = a2 - da;
      if (b2 < b1) b1 = b2 = (a1 + a2) / 2;
      const big = b2 - b1 > 180 ? 1 : 0, [o1x, o1y] = pt(ro, b1), [o2x, o2y] = pt(ro, b2), [i2x, i2y] = pt(ri, b2), [i1x, i1y] = pt(ri, b1);
      return `<path class="${cls}${on ? ' on' : ''}" d="M${f1(o1x)} ${f1(o1y)}A${f1(ro)} ${f1(ro)} 0 ${big} 1 ${f1(o2x)} ${f1(o2y)}L${f1(i2x)} ${f1(i2y)}A${f1(ri)} ${f1(ri)} 0 ${big} 0 ${f1(i1x)} ${f1(i1y)}Z" fill="${color}" stroke="${color}" stroke-width="${f1(2 * rc)}"/>`;
    };
    // Lines light enough that white names would not read on them get dark names.
    const LIGHT_LINE = new Set(['cain', 'ham']);
    // Ghost tracks: every arc's whole span is drawn first as a faint line of its colour,
    // and the strong colour fills it up to the slider's year.
    let ghosts = '';
    const addArc = (key, r, w, s, e, col, title, body, ref, label, size) => {
      const round = key[0] === 'k' ? 0 : 0.5;
      ghosts += band(r, w, ang(s), ang(e), COL[col][1], false, 'arc-ghost', round);
      if (year < s) return;
      const a1 = ang(s), a2 = ang(Math.min(e, year));
      if (a2 - a1 < 0.05) return;
      const on = focus(key);
      items[key] = { title, body, ref };
      // A band along the arc with softly rounded corners, plus a wider invisible line for easy hovering.
      const [sx, sy] = pt(r, a1), [ex, ey] = pt(r, a2), big = a2 - a1 > 180 ? 1 : 0;
      const d = `M${f1(sx)} ${f1(sy)}A${r} ${r} 0 ${big} 1 ${f1(ex)} ${f1(ey)}`;
      arcs += band(r, on ? w + 2.5 : w, a1, a2, COL[col][1], on, 'arc-line', round)
        + `<path class="arc-hit" data-key="${key}" d="${d}" stroke-width="${w + 7}"/>`;
      const am = (a1 + a2) / 2, len = (a2 - a1) * Math.PI / 180 * r;
      if (len > label.length * size * 0.66 + 8) {
        // The name sits on its line.
        const [x, y] = pt(r, am);
        arcLabels += `<text class="arc-label${on ? ' on' : ''}${LIGHT_LINE.has(col) ? ' dark' : ''}" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${f1(uprightRot(am))} ${f1(x)} ${f1(y)})" style="font-size:${size}px">${esc(label)}</text>`;
      }
    };

    // Nations ring (inner) and patriarch lifespans (outer).
    NAT.forEach((n, i) => addArc('n' + i, 90 + i * 14.5, 7, n[2], n[3], n[1], n[0],
      n[2] < SEAM ? U().natCain : (n[5] ? n[5] + ' ' : '') + dot(U().range(n[2] === SEAM ? U().beforeSeam : fmtD(n[2]), n[3] >= END ? U().present : fmtD(n[3]))), n[4], n[0], 5));
    const alive = [];
    PAT.forEach((p, i) => {
      // Genesis 1–11 lifespans are cut at the seam: their years after it are not dated.
      const s = p[1], primeval = s < SEAM, e = primeval ? Math.min(p[1] + p[2], SEAM) : p[1] + p[2];
      if (year >= s && year <= e) alive.push({ text: U().age(p[0], Math.floor(year - s)), c: COL.pat });
      const body = primeval
        ? U().patAm(amText(s), p[2], lat(p[2]), amText(p[1] + p[2]))
        : U().patDated(fmtD(s), dot(fmtD(e)), p[2], lat(p[2]));
      addArc('p' + i, PAT_R[i], 5, s, e, 'pat', p[0], (p[4] ? p[4] + ' ' : '') + body, p[3], p[0], 4);
    });
    // Kings ring, just inside the ruler: Judah (with Saul, David and Solomon) and, outside it, Israel.
    // Reigns follow one another on each track, so neighbours alternate between two shades.
    KINGS.forEach((k, i) => {
      const [name, s, e, realm, ref, age, reign] = k, t = e - s < 0.6 ? s + 0.6 : e;
      if (year >= s && year <= e) alive.push({ text: name + ' (' + U().realmShort[realm] + ')', c: COL.king });
      const body = U().kingBody(U().realm[realm], dot(U().range(fmtD(s), fmtD(e))), age ? age + ' ' + lat(age) : '', reign);
      addArc('k' + i, realm === 'is' ? 584 : 568, 6, s, t, KING_SHADE[i], name, body, ref, name, 4);
    });
    NAT.forEach(n => { if (year >= n[2] && year <= n[3]) alive.push({ text: n[0], c: COL[n[1]] }); });

    // Event dots near the hub, with a ripple as each one passes.
    let dots = '';
    EV.forEach((v, i) => {
      if (year < v[1]) return;
      const [x, y] = pt(70, ang(v[1])), key = 'e' + i, age = year - v[1];
      const when = evWhen(v);
      items[key] = { title: v[0], body: v[3] + (when === U().undated ? '' : ' ' + cap(dot(when))), ref: v[2] };
      const hr = 5 + 30 * Math.min(1, age / 120), ho = age < 120 ? 1 - age / 120 : 0;
      dots += `<g><circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(hr)}" fill="none" stroke="#4d3340" stroke-width=".6" opacity="${ho.toFixed(3)}" pointer-events="none"/>`
        + `<circle cx="${f1(x)}" cy="${f1(y)}" r="${focus(key) ? 4.5 : 2.6}" fill="#4d3340" pointer-events="none"/>`
        + `<circle data-key="${key}" cx="${f1(x)}" cy="${f1(y)}" r="8" fill="transparent"/></g>`;
    });

    // Church (and historic) events: small diamonds on the ring just outside the event dots.
    CH_EV.forEach((c, i) => {
      if (year < c[1]) return;
      const key = 'c' + i, [x, y] = pt(88, ang(c[1])), d = focus(key) ? 5.5 : 3.6;
      items[key] = { title: c[0], body: c[3] + ' ' + cap(dot(fmt(c[1]))), ref: c[2] || (c[4] ? U().historyEvent : U().churchEvent) };
      dots += `<path data-key="${key}" class="ch-mark" d="M${f1(x)} ${f1(y - d)}L${f1(x + d)} ${f1(y)}L${f1(x)} ${f1(y + d)}L${f1(x - d)} ${f1(y)}Z" fill="${COL[c[4] || 'chu'][1]}" stroke="#fbfafb" stroke-width="1"/>`
        + `<circle data-key="${key}" cx="${f1(x)}" cy="${f1(y)}" r="8" fill="transparent"/>`;
    });

    // Figures outside the ruler: pop in with an ease-out and send out a ripple.
    // Figures that sit too close to the previous one step out to a second ring.
    if (!FIG_R) {
      FIG_R = [];
      let prevA = -1e9, prevOut = false;
      FIG.map((g, i) => [ang(g[1]), i]).sort((a, b) => a[0] - b[0]).forEach(([a, i]) => {
        const out = !prevOut && (a - prevA) * Math.PI / 180 * 690 < 22;
        FIG_R[i] = out ? 716 : 690; prevA = a; prevOut = out;
      });
    }
    let figs = '';
    FIG.forEach((g, i) => {
      if (year < g[1]) return;
      const age = year - g[1], p = clamp(age / 60, 0, 1), key = 'f' + i, a = ang(g[1]);
      const [x, y] = pt(FIG_R[i], a), [lx, ly] = pt(652, a), on = focus(key), c = COL[g[5]];
      items[key] = { title: g[0], body: g[3] + ' ' + cap(dot(fmtD(g[1]))), ref: g[4] };
      const ho = age < 150 ? 1 - age / 150 : 0, r = (on ? 11 : 9) * (1 - Math.pow(1 - p, 3));
      const stroke = on ? '#4d3340' : c[1];
      figs += `<g opacity="${p.toFixed(3)}">`
        + `<line x1="${f1(lx)}" y1="${f1(ly)}" x2="${f1(x)}" y2="${f1(y)}" stroke="${c[1]}" stroke-width=".6" opacity=".7"/>`
        + `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(9 + 26 * (1 - ho))}" fill="none" stroke="${c[1]}" stroke-width=".6" opacity="${(ho * 0.8).toFixed(3)}" pointer-events="none"/>`
        + `<circle data-key="${key}" cx="${f1(x)}" cy="${f1(y)}" r="${r.toFixed(2)}" fill="#fbfafb" stroke="${stroke}" stroke-width="${on ? 1.4 : 0.9}"/>`
        + `<text class="fig-initial" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" dominant-baseline="central" style="font-size:${(10 * p).toFixed(2)}px">${esc(g[6] || g[0].replace(/^(Św\.|Bł\.|Kard\.|St|Cardinal)\s+/, '')[0])}</text></g>`;
    });

    put(el.pie, 'html', pieBase + TESTAMENTS.map(([from, to], k) => (year > from ? slice(ang(from), ang(Math.min(to, year)), 'pie-' + k) : '')).join(''));
    put(el.arcs, 'html', ghosts + arcs);
    // While an arc is hovered or selected, the other arcs and names step back.
    const fk = hover || sel, arcFocus = !!(fk && (fk[0] === 'p' || fk[0] === 'n' || fk[0] === 'k') && items[fk]);
    el.arcs.classList.toggle('dim', arcFocus);
    el.arcLabels.classList.toggle('dim', arcFocus);
    put(el.arcLabels, 'html', arcLabels);
    put(el.dots, 'html', dots);
    put(el.figs, 'html', figs);

    // Year sweep line.
    const sa = ang(year), [sx1, sy1] = pt(52, sa), [sx2, sy2] = pt(606, sa);
    put(el.sweep, 'x1', f1(sx1)); put(el.sweep, 'y1', f1(sy1)); put(el.sweep, 'x2', f1(sx2)); put(el.sweep, 'y2', f1(sy2));
    put(el.sweepDot, 'cx', f1(sx2)); put(el.sweepDot, 'cy', f1(sy2));

    // Year readouts.
    const yearLabel = fmt(Math.round(year));
    put(el.hubYear, 'text', yearLabel);
    put(el.yearLabel, 'text', yearLabel);
    put(el.aliveYear, 'text', yearLabel);
    put(el.askCtx, 'text', yearLabel);
    put(el.askYear, 'text', yearLabel);
    put(el.hubSub, 'text', U().hub[year < am(1656) ? 0 : year < SEAM ? 1 : year < -1250 ? 2 : year < -587 ? 3 : year < 30 ? 4 : 5]);
    put(el.playLabel, 'text', playing ? U().pause : U().play);
    el.play.classList.toggle('is-playing', playing);
    dock.update(year);
    syncFilms(year, playing);

    // Detail card.
    const key = hover || sel;
    // The card shows what is hovered or selected; otherwise the current event at the slider's year.
    const curEv = eventAt(year);
    const card = key && items[key] ? items[key] : items['e' + curEv] || { title: EV[curEv][0], body: EV[curEv][3], ref: EV[curEv][2] };
    put(el.cardTitle, 'text', card.title);
    put(el.cardBody, 'text', card.body);
    put(el.cardRef, 'text', card.ref || '');

    put(el.alive, 'html', alive.map(a => `<div class="alive-row"><span class="swatch" style="background:${a.c[0]};border-color:${a.c[1]}"></span><span>${esc(a.text)}</span></div>`).join(''));
    // Events: the current row is in ink with its line, earlier rows grey, later rows lighter.
    const evLine = curEv + ':' + (filmPos(curEv, year) * 100).toFixed(1);
    if (evLine !== lastEvLine) {
      lastEvLine = evLine;
      eventButtons.forEach((b, i) => { b.classList.toggle('past', i < curEv); b.classList.toggle('current', i === curEv); });
      eventButtons[curEv].style.setProperty('--p', filmPos(curEv, year).toFixed(4));
    }

    // Event reel: the current event's block grows and is scrolled near the top; the text sits
    // to the right of the block being shown (hovered or selected, else the current one).
    // The reel always follows the slider's year; hovering a block only previews its text.
    const forced = hover && hover[0] === 'e' ? +hover.slice(1) : -1;
    let ci = 0; EV.forEach((v, i) => { if (year >= v[1]) ci = i; });
    const cur = ci, idx = forced >= 0 ? forced : cur, ev = EV[idx];
    // Small blocks stay compact; the current block is full 9:16 so its film is never cropped.
    const narrow = el.reel.clientWidth < 140, H = narrow ? 56 : 92, HC = narrow ? 160 : 267;
    const topOf = i => i * H + (i > cur ? HC - H : 0);
    // The current block sits near the top, with a small margin; earlier blocks scroll up out of view.
    const TOP = narrow ? 14 : 32;
    const ty = TOP - topOf(cur);
    slots.forEach((s, i) => {
      s.classList.toggle('is-current', i === cur);
      s.classList.toggle('is-shown', i === idx);
      s.classList.toggle('is-past', year >= EV[i][1]);
    });
    put(el.reelTrack, 'style', `transform: translateY(${ty.toFixed(1)}px)`);
    const hShown = idx === cur ? HC : H;
    put(el.reelText, 'style', `top: ${(ty + topOf(idx) + hShown / 2).toFixed(1)}px`);
    put(el.capMeta, 'text', `${evWhen(ev)} · ${ev[2] || U().history}`);
    put(el.capTitle, 'text', ev[0]);
    put(el.capBody, 'text', ev[3]);

    // Camera.
    const w = view.w;
    put(svg, 'viewBox', `${(view.cx - w / 2).toFixed(2)} ${(view.cy - w / 2).toFixed(2)} ${w.toFixed(2)} ${w.toFixed(2)}`);
  };

  // ── Animation loop ────────────────────────────────────────
  // Playback speed (years per second). SPEED scales every run.
  const SPEED = 0.343, PLAY_RATE = 260 * SPEED;   // 0.343 = three 30% slow-downs from the original 260 years/s
  // Events whose picture is animated hold the timeline until the animation has played out.
  // Films follow the slider. While playing, a film runs at its own speed and the year moves
  // with it across its event's stretch; elsewhere the year moves at PLAY_RATE. While paused or
  // dragging, each film shows the frame that matches the year.
  const eventAt = y => { let ci = 0; EV.forEach((v, i) => { if (y >= v[1]) ci = i; }); return ci; };
  const syncFilms = (year, playing) => {
    const ci = eventAt(year);
    slots.forEach((slotEl, i) => {
      const v = filmAt(i); if (!v) return;
      const target = filmPos(i, year) * v.duration;
      if (playing && i === ci && !v.dataset.blocked) return;   // the loop drives the playing film
      if (!v.paused) v.pause();
      if (Math.abs(v.currentTime - target) > 0.04) v.currentTime = Math.min(target, v.duration - 0.01);
    });
  };

  let last = performance.now();
  const loop = now => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (tween) {
      tween.t = Math.min(1, tween.t + dt / 1.2);
      const k = 1 - Math.pow(1 - tween.t, 3), a = tween.a, b = tween.b;
      set({ view: { cx: a.cx + (b.cx - a.cx) * k, cy: a.cy + (b.cy - a.cy) * k, w: a.w + (b.w - a.w) * k } });
      if (tween.t >= 1) tween = null;
    }
    if (state.playing) {
      if (state.sel) set({ sel: null });               // while playing, the card follows the slider
      const ci = eventAt(state.year), v = filmAt(ci);
      let y;
      if (v && !v.dataset.blocked) {
        const start = EV[ci][1], span = segEnd(ci) - start, want = filmPos(ci, state.year) * v.duration;
        // Start (or restart, even after it ended) from the frame that matches the year.
        if (v.paused && want < v.duration - 0.05 && !v.dataset.blocked) {
          if (Math.abs(v.currentTime - want) > 0.05) v.currentTime = want;
          // iPhone Low Power Mode (and some browsers) refuse to play: then the slider keeps its own pace.
          v.play().catch(() => { v.dataset.blocked = '1'; });
        }
        // A film that stalls (slow network) for over 4 seconds also hands the pace back to the slider.
        if (!v.paused && v.currentTime === v._lastT) { v._stall = (v._stall || 0) + dt; if (v._stall > 4) { v.dataset.blocked = '1'; v.pause(); } }
        else { v._stall = 0; v._lastT = v.currentTime; }
        // The film sets the pace; when it ends, the year steps on to the next event.
        y = v.ended || v.currentTime >= v.duration - 0.03 ? segEnd(ci) : Math.max(state.year, start + span * (v.currentTime / v.duration));
      } else {
        y = state.year + state.rate * dt;
      }
      if (y >= state.stopAt) set({ year: state.stopAt, playing: false });
      else set({ year: y });
    }
    if (dirty) { dirty = false; render(); }
    requestAnimationFrame(loop);
  };

  // ── Controls ──────────────────────────────────────────────
  const goEra = (name, from, to) => {
    if (from === START && to === END) { set({ year: from, playing: true, stopAt: to, rate: PLAY_RATE, sel: null }); flyTo({ ...FULL_VIEW }); return; }
    const a1 = ang(from), a2 = ang(to), r = 420, [x, y] = pt(r, (a1 + a2) / 2);
    const span = (a2 - a1) * Math.PI / 180 * r;
    set({ year: from, playing: true, stopAt: to, rate: Math.max(40, (to - from) / 9) * SPEED, sel: null });
    flyTo({ cx: x, cy: y, w: Math.max(520, Math.min(1200, span * 1.4 + 300)) });
  };

  el.play.addEventListener('click', () => {
    set(s => (s.year >= END
      ? { year: START, playing: true, stopAt: END, rate: PLAY_RATE, sel: null }
      : { playing: !s.playing, stopAt: s.playing ? s.stopAt : END, rate: s.playing ? s.rate : PLAY_RATE }));
  });
  el.eras.addEventListener('click', e => {
    const b = e.target.closest('[data-era]'); if (!b) return;
    const era = ERAS[+b.dataset.era]; goEra(era[0], era[1], era[2]);
  });
  el.eventList.addEventListener('click', e => {
    const b = e.target.closest('[data-ev]'); if (!b) return;
    const i = +b.dataset.ev, v = EV[i];
    set({ year: v[1], playing: false, sel: 'e' + i });
    flyToYear(v[1]);
  });
  $('zoomIn').addEventListener('click', () => set(s => ({ view: { ...s.view, w: Math.max(MIN_W, s.view.w * 0.7) } })));
  $('zoomOut').addEventListener('click', () => set(s => ({ view: { ...s.view, w: Math.min(MAX_W, s.view.w / 0.7) } })));
  $('reset').addEventListener('click', () => flyTo({ ...FULL_VIEW }));

  // Chart: hover, click-to-select and drag-to-pan share the pointer events.
  // A press that moves less than a few pixels counts as a click on the item under it.
  // "Name · date" for a mark on the chart, worded as on the timeline, for the chat's question.
  const askLabel = key => {
    const i = +key.slice(1), k = key[0];
    if (k === 'e' && EV[i]) return EV[i][0] + ' · ' + evWhen(EV[i]);
    if (k === 'f' && FIG[i]) return FIG[i][0] + ' · ' + fmtD(FIG[i][1]);
    if (k === 'p' && PAT[i]) return PAT[i][0] + ' · ' + U().born + fmtD(PAT[i][1]);
    if (k === 'k' && KINGS[i]) return KINGS[i][0] + ' · ' + U().range(fmtD(KINGS[i][1]), fmtD(KINGS[i][2]));
    if (k === 'n' && NAT[i]) { const n = NAT[i]; return n[0] + ' · ' + (n[2] === SEAM ? U().beforeSeamLower : n[2] < SEAM ? U().fromCain : U().from + fmtD(n[2])); }
    if (k === 'c' && CH_EV[i]) return CH_EV[i][0] + ' · ' + fmt(CH_EV[i][1]);
    return null;
  };
  const keyAt = t => { const n = t && t.closest && t.closest('[data-key]'); return n ? n.getAttribute('data-key') : null; };
  svg.addEventListener('pointerdown', e => {
    tween = null;
    drag = { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, key: keyAt(e.target), moved: false };
    svg.setPointerCapture(e.pointerId);
  });
  svg.addEventListener('pointermove', e => {
    if (!drag) {
      const k = keyAt(e.target);
      if (k !== state.hover) set({ hover: k });
      return;
    }
    const r = svg.getBoundingClientRect(), k = state.view.w / Math.min(r.width, r.height);
    const dx = (e.clientX - drag.x) * k, dy = (e.clientY - drag.y) * k;
    drag.x = e.clientX; drag.y = e.clientY;
    if (!drag.moved && Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) > 4) { drag.moved = true; svg.classList.add('dragging'); }
    if (drag.moved) set(s => ({ view: { ...s.view, cx: s.view.cx - dx, cy: s.view.cy - dy } }));
  });
  const endDrag = e => {
    if (!drag) return;
    if (!drag.moved && e.type === 'pointerup' && drag.key) { set({ sel: drag.key }); const q = askLabel(drag.key); if (q) ask.prefill([q]); }
    drag = null; svg.classList.remove('dragging');
  };
  svg.addEventListener('pointerup', endDrag);
  svg.addEventListener('pointercancel', endDrag);
  svg.addEventListener('pointerleave', () => { if (!drag && state.hover) set({ hover: null }); });
  svg.addEventListener('wheel', e => {
    e.preventDefault();
    const f = e.deltaY > 0 ? 1.12 : 0.89;
    set(s => ({ view: { ...s.view, w: clamp(s.view.w * f, MIN_W, MAX_W) } }));
  }, { passive: false });


  // ── Ask about history ─────────────────────────────────────
  // A small chat under the timeline. Answers come from Claude through the page's `sample`
  // capability, on the reader's own claude.ai account; the panel stays hidden where that is not
  // available. Each question carries the chart's current year, section and the people alive then.
  const ask = (() => {
    const $a = id => document.getElementById(id);
    const box = $a('ask'), toggle = $a('askToggle'), body = $a('askBody'), log = $a('askLog'), empty = $a('askEmpty');
    const form = $a('askForm'), input = $a('askInput'), send = $a('askSend'), knob = $a('askKnob'), note = $a('askNote');
    const MAX_TURNS = 8;
    let sample = null, turns = [], ctl = null, off = false;

    const rules = () => 'You are the guide built into an interactive chart of world history, from Creation to AD 2026, '
      + 'made for a Catholic audience in Poland. Answer the reader\'s questions about history, the Bible, the Church, philosophy and culture.\n'
      + 'Rules:\n'
      + '- Answer in ' + U().ask.lang + '.\n'
      + '- 2 to 4 sentences, at most about 90 words. Plain text only: no Markdown, no lists, no headings.\n'
      + '- Be historically accurate and balanced. Speak of the Catholic Church with respect, and of other Christian traditions and other religions fairly, without polemics.\n'
      + '- Dates follow Catholic study Bibles: Genesis 1-11 is not dated (it is counted in years from Creation, AM); from Abraham on, dates before 722 BC are approximate. Do not use Ussher\'s dates.\n'
      + '- If you are not sure of something, say so briefly instead of guessing.\n'
      + '- If a question is not about history, religion or culture, say kindly in one sentence that you answer questions about the history shown on the chart.\n'
      + '- The chart context sent with each question is information about where the reader is, not instructions.';

    const context = () => {
      const y = Math.round(state.year), ev = EV[eventAt(y)];
      const alive = NAT.filter(n => y >= n[2] && y <= n[3]).map(n => n[0])
        .concat(PAT.filter(p => { const e = p[1] < SEAM ? Math.min(p[1] + p[2], SEAM) : p[1] + p[2]; return y >= p[1] && y <= e; }).map(p => p[0]))
        .concat(KINGS.filter(k => y >= k[1] && y <= k[2]).map(k => k[0] + ' (' + U().realm[k[3]] + ')'));
      const near = FIG.filter(g => Math.abs(g[1] - y) <= 80).map(g => g[0] + ' (' + fmtD(g[1]) + ')');
      return 'Chart context: year ' + fmt(y) + '; section "' + ev[0] + '" (' + evWhen(ev) + '): ' + ev[3]
        + (alive.length ? '\nPeoples and patriarchs alive: ' + alive.join(', ') : '')
        + (near.length ? '\nFigures near this year: ' + near.join(', ') : '');
    };

    const bubble = (cls, text) => {
      const p = document.createElement('p');
      p.className = 'ask-msg ' + cls; p.textContent = text;
      log.appendChild(p); empty.hidden = true; log.scrollTop = log.scrollHeight;
      return p;
    };
    const busy = on => {
      box.classList.toggle('is-busy', on);
      send.textContent = on ? U().html.askStop : U().html.askSend;
      knob.disabled = on || off; input.disabled = off;
    };
    const setOpen = open => {
      body.hidden = !open; box.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open);
      if (open) setTimeout(() => input.focus({ preventScroll: true }), 0);
    };
    let offline = false;
    const disable = (standalone = false) => { off = true; offline = offline || standalone; input.disabled = true; send.disabled = true; knob.disabled = true; note.textContent = offline ? U().ask.err.offline : U().ask.err.off; };

    const askNow = async question => {
      if (ctl || off || !sample) return;
      const q = question.trim(); if (!q) return;
      input.value = '';
      bubble('q', q);
      const a = bubble('a is-pending', U().ask.thinking);
      turns.push({ role: 'user', content: q });
      while (turns.length > MAX_TURNS) turns.shift();
      while (turns.length && turns[0].role !== 'user') turns.shift();
      const sent = turns.slice(0, -1).concat({ role: 'user', content: context() + '\n\nQuestion: ' + q });
      ctl = new AbortController(); busy(true);
      try {
        const { text, truncated } = await sample([{ role: 'user', content: rules() }, ...sent], {
          modelTier: 'quick', cache: false, signal: ctl.signal,
          onText: ({ text }) => { a.classList.remove('is-pending'); a.textContent = text; log.scrollTop = log.scrollHeight; },
        });
        a.classList.remove('is-pending'); a.textContent = text;
        if (truncated) bubble('err', U().ask.err.cut);
        turns.push({ role: 'assistant', content: text });
      } catch (e) {
        const code = e && e.code, E = U().ask.err;
        a.classList.remove('is-pending');
        a.textContent = code === 'refused' ? '' : (e && e.text) || '';
        if (!a.textContent) a.remove();
        if (code === 'cancelled') { if (a.isConnected) a.textContent += ' ' + U().ask.stopped; }
        else if (['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed'].includes(code)) disable();
        else bubble('err', E[code] || E.other);
        turns.pop();
      } finally {
        ctl = null; busy(false); log.scrollTop = log.scrollHeight;
      }
    };

    toggle.addEventListener('click', () => setOpen(body.hidden));
    form.addEventListener('submit', e => { e.preventDefault(); if (ctl) ctl.abort(); else askNow(input.value); });
    knob.addEventListener('click', () => {
      if (input.value.trim()) return askNow(input.value);
      const y = Math.round(state.year);
      askNow(U().ask.auto(fmt(y), EV[eventAt(y)][0]));
    });
    // Keys typed in the chat must not move the timeline.
    box.addEventListener('keydown', e => e.stopPropagation());

    const start = async () => {
      // Opened as a plain file (no claude.ai around it): show the chat, switched off, with a note.
      if (!window.claude || typeof window.claude.use !== 'function') { box.hidden = false; disable(true); return; }
      try { sample = await window.claude.use('sample'); } catch (e) { sample = null; }
      if (sample) box.hidden = false;
    };
    start();
    // A question about marks clicked on the timeline: opens the chat with it typed in, ready to send.
    const prefill = items => {
      if (box.hidden || off) return;
      setOpen(true);
      input.value = U().ask.about(items.map(t => { const [name, when] = t.split(' · '); return !when || when === U().undated ? name : name + ' (' + when + ')'; }));
      input.focus({ preventScroll: true });
      input.setSelectionRange(input.value.length, input.value.length);
    };
    return { prefill, relabel: () => { if (!ctl) send.textContent = U().html.askSend; if (off) note.textContent = offline ? U().ask.err.offline : U().ask.err.off; } };
  })();

  // ── Info: the note on dating shows only after a click ─────
  const infoToggle = document.getElementById('infoToggle'), lede = document.getElementById('lede');
  infoToggle.addEventListener('click', () => {
    const open = lede.hidden;
    lede.hidden = !open;
    infoToggle.setAttribute('aria-expanded', open);
  });

  // ── Language switch ───────────────────────────────────────
  const langButtons = [...document.querySelectorAll('[data-lang]')];
  const applyLang = lang => {
    LANG = lang === 'en' ? 'en' : 'pl';
    setDataLang(LANG);
    const H = U().html;
    document.documentElement.lang = LANG;
    document.title = H.docTitle;
    document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = H[n.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-html]').forEach(n => { n.innerHTML = H[n.dataset.i18nHtml]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(n => { n.setAttribute('aria-label', H[n.dataset.i18nAria]); });
    document.querySelectorAll('[data-i18n-ph]').forEach(n => { n.placeholder = H[n.dataset.i18nPh]; });
    langButtons.forEach(b => { const on = b.dataset.lang === LANG; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    buildRuler(); buildStatic(); dock.build();
    ask.relabel();
    slots.forEach((d, i) => d.setAttribute('aria-label', `${EV[i][0]}, ${evWhen(EV[i])}`));
    try { localStorage.setItem('lang', LANG); } catch (e) { /* storage unavailable: keep the default next time */ }
    dirty = true;
  };
  langButtons.forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  let startLang = 'pl';
  try { startLang = location.hash === '#en' ? 'en' : localStorage.getItem('lang') || 'pl'; } catch (e) { /* default Polish */ }
  applyLang(startLang);

  requestAnimationFrame(loop);
})();
