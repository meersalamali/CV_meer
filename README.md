# CV_meer

Personal CV / portfolio site for **Meer Salam Ali** — Computer Science, AI and web
application developer.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole page (single page, anchored sections) |
| `style.css` | Design system + layout, light/dark themes, RTL support |
| `script.js` | Theme toggle, EN/KU/AR translations, scroll effects |
| `profile.png` | Hero portrait (studio headshot taken from the CV PDF) |
| `meer.png` | Previous portrait, kept as an alternative |
| `Meer_Salam_Ali (IT & full stuck developer).pdf` | CV offered by the "Download CV" button |

## Editing content

All visible text is driven by the `translations` object at the top of `script.js`,
keyed by the `data-key` attributes in `index.html`. To change a sentence, edit the
matching key in **all three** language blocks (`en`, `ku`, `ar`). The English text in
`index.html` is only the fallback shown before the script runs.

Every `data-key` used in the HTML must exist in each language block, or that element
will keep the fallback text when the language is switched.

## Local preview

The site is fully static — open `index.html` in a browser, or serve the folder with
XAMPP and visit `http://localhost/CV_meer-main/`.
