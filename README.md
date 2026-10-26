# Faust HR Solutions — Temporary Website

Static, responsive placeholder website for GitHub Pages. No build process or server required.

## Publish on GitHub Pages
1. Create a new public GitHub repository (for example, `fhrs-website`).
2. Upload **all three items** from this folder to the repository root: `index.html`, `styles.css`, `script.js`, and the `assets` folder with its logo. (Four items total.)
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, and click **Save**.
5. Wait for deployment. Your site will be at `https://YOUR-USERNAME.github.io/fhrs-website/`.

## Connect your custom domain (optional)
In Settings → Pages → Custom domain, enter `www.fausthrsolutions.com`. At your domain DNS provider, add a CNAME record for `www` pointing to `YOUR-USERNAME.github.io` (replace with your actual GitHub username). Follow GitHub's displayed domain-verification instructions and enable **Enforce HTTPS** once available. Avoid changing Microsoft 365 email-related DNS records (MX, SPF, DKIM, DMARC).

## Editing
- Site text and links: `index.html`
- Colors, fonts, layout: `styles.css`
- Mobile navigation: `script.js`
- Logo: `assets/fhrs-logo.png`

Contact buttons use email and telephone links; there is no backend form or data collection.
