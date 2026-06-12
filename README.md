# RAW Coworking Static Website

This is a clean, responsive static website inspired by the public RAW Coworking website structure. It is written with original HTML, CSS and JavaScript and is ready for GitHub Pages deployment.

## Files

```text
raw-coworking-static-site/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── logo.svg
```

## How to run locally

Open `index.html` directly in your browser, or run a local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## How to upload to GitHub

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save and open your GitHub Pages URL.

## Contact form note

GitHub Pages is static, so the form uses `mailto:` and opens the user's email app. For a real backend form, connect Formspree, Netlify Forms, Google Forms, or your own server API.
