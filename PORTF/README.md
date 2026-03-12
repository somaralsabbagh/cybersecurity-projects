# SDN Portfolio Landing (PORTF)

A polished, single-page portfolio showcase for the Secure SDN AAA project.

## Files
- `index.html`: Page structure and portfolio content.
- `styles.css`: Visual identity, layout, responsive behavior, and animations.
- `app.js`: Reveal animations, KPI counter effects, and link placeholders.
- `assets/system-architecture.png`: Architecture diagram used in the main section.

## Customize Before Public Release
1. Open `app.js` and replace the placeholder URLs in `LINKS` with your public repository/docs links.
2. Update hero text or KPI values in `index.html` if new experiment runs are available.
3. Keep the architecture image in `assets/` (or replace it with an updated version using the same name).

## Local Preview
Open `index.html` in a browser.

## Publish via GitHub Pages
1. Put this folder content at the root of your public repository, or in a dedicated branch/folder.
2. In GitHub: `Settings > Pages`.
3. Select source branch/folder and save.
4. GitHub will provide a public URL for the portfolio page.

## Data Sources Used In This Page
- `README.md`
- `docs/*.md`
- `data/results/baseline/20251221T182748Z/*`
- `data/results/latest/controller_metrics.json`
