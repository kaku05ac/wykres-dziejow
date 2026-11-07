# Event pictures

Drop one image per event into this folder. The chart shows it in greyscale in the picture panel, crossfading in as the timeline reaches the event.

Name each file after its event. Use `.jpg`, `.jpeg`, `.png` or `.webp`. A portrait image of about 2:3 fits the panel best. Events without a file show a placeholder.

| Event | Date | File |
|---|---|---|
| Creation | Undated | `creation.jpg` |
| The Flood | AM 1656 | `the-flood.jpg` |
| Tower of Babel | Undated | `tower-of-babel.jpg` |
| Call of Abraham | c. 1825 BC | `call-of-abraham.jpg` |
| Binding of Isaac | c. 1780 BC | `binding-of-isaac.jpg` |
| The Exodus | c. 1250 BC | `the-exodus.jpg` |
| Solomon's temple | c. 960 BC | `solomon-s-temple.jpg` |
| Kingdom divides | c. 931 BC | `kingdom-divides.jpg` |
| Fall of Samaria | 722 BC | `fall-of-samaria.jpg` |
| Babylonian captivity | 597 BC | `babylonian-captivity.jpg` |
| Return from exile | 538 BC | `return-from-exile.jpg` |
| Birth of Christ | c. 6–4 BC | `birth-of-christ.jpg` |
| Crucifixion and Pentecost | AD 30 or 33 | `crucifixion-and-pentecost.jpg` |
| Fall of Rome | AD 476 | `fall-of-rome.jpg` |
| Reformation | AD 1517 | `reformation.jpg` |

## Films

An event can play a short film instead of a picture. Put an MP4 (H.264) named after the event here, for example `creation.mp4`, plus a WebM copy (`creation.webm`) for browsers without H.264, and add the event to `VIDEOS` in `app.js`. The film plays silently once, from its first frame, each time the event becomes current, and the Play run waits for it to finish.
