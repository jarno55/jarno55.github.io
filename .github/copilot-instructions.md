# Copilot instructions — jarno55.github.io

Purpose: make AI coding agents immediately productive on this repository (a static GitHub Pages website).

**Project Overview**
- This is a static website (plain HTML/CSS/JS) served from the `main` branch. The root HTML files (`index.html`, `about.html`, `projects.html`, etc.) are the source of truth for the site content.
- There are multiple archived copies and alternative templates in `Archiv/` and `Archive/`. These are backups or template examples — do not modify them unless explicitly asked.

**Key files & directories**
- `index.html` — primary entry page.
- `about.html`, `portfolio.html`, `projects.html`, `contact.html`, `media.html`, `band.html` — other top-level pages.
- `css/` — main styles live here (`styles.css`, `styles-full.css`, `vendor.css`, `bootstrap*.css`). Prefer editing these for global style changes.
- `js/` — site scripts (`main.js`, `plugins.js`). Look here for page interactions and legacy jQuery code.
- `images/` and `assets/` — media and theme assets.
- `CNAME` — custom domain configuration. Never remove or change without explicit deployment intent.
- `README.md` (root and `Archiv/`) — author notes and historical info.

**What to edit vs leave alone**
- Edit files in the repository root (`*.html`, `css/`, `js/`, `images/`) to change site content and behavior.
- Avoid editing `Archiv/` and `Archive/` unless the task is explicitly to update an archived template.
- Preserve `CNAME`, `LICENSE`, and any vendor files unless the task is to upgrade vendor libraries.

**Build & preview (no build system)**
- There is no build step. Preview locally by serving the repository directory over HTTP:

```bash
# from repo root
python3 -m http.server 8000
# or, if you have http-server installed:
npx http-server -c-1 . 8000
```

Open `http://localhost:8000` to preview pages.

**Patterns & conventions discovered in this repo**
- Plain HTML pages reference CSS and JS with relative paths (e.g. `<link rel="stylesheet" href="css/styles.css">`). Keep relative paths consistent when moving files.
- The project contains multiple vendor copies and template folders (e.g. `Archiv/html5up-escape-velocity/`). When possible, make changes to the root `css/` and `js/` files rather than altering vendor distribution files.
- JavaScript is a mix of vanilla and jQuery. Look at `js/main.js` and `js/plugins.js` for interactive behavior; many snippets include legacy user-agent checks — be conservative when refactoring.

**Deployment notes**
- Deployed via GitHub Pages from the `main` branch. Keep `CNAME` and `index.html` intact for a smooth deployment.

**Examples — concrete tasks & hints for the AI agent**
- Change header text on the home page: edit `index.html` — modify the hero section and update any classes in `css/styles.css` if needed.
- Add a new portfolio item: add the image to `images/portfolio/` (or `assets/img/portfolio/` if used) and add an item in the portfolio markup in `portfolio.html` following the existing item structure.
- Fix a JavaScript interaction: search `js/main.js` and `js/plugins.js` for the event handler, reproduce locally with `python3 -m http.server`, and test in the browser.

**Commit & PR guidelines for AI edits**
- Keep changes focused to a small set of files.
- Example commit message format: `fix(styles): update hero spacing on index` or `feat(content): add portfolio item "Project Name"`.

**When uncertain**
- If a change might affect deployment (CNAME, root `index.html`, or major vendor upgrades), ask before applying. If a refactor touches many files, propose the change in an issue/PR first.

If anything in this instruction file is unclear or you'd like me to add examples for a specific task (e.g. editing the navigation, adding a page, or upgrading Bootstrap), tell me which area to expand.
