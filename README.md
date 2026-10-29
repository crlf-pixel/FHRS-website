# Faust HR Solutions — Website

Static, responsive website for Faust HR Solutions, hosted on GitHub Pages. No build process or server required.

- **Live site:** https://www.fausthrsolutions.com
- **Repository:** `crlf-pixel/fhrs-website`
- **Publishing:** GitHub Pages deploys from the `main` branch, root folder. Changes pushed to `main` go live automatically within a minute or two.

## Files

| File | What it controls |
| --- | --- |
| `index.html` | Site text, sections, and links |
| `styles.css` | Colors, fonts, and layout |
| `script.js` | Mobile menu, footer year, header shadow, scroll animations, and contact form |
| `assets/fhrs-logo.png` | Logo (header and footer) |
| `assets/catrina-faust.jpg` | Photo in the About section |
| `CNAME` | Custom domain setting created by GitHub. **Do not delete.** |

## Updating the site

1. In the repository, open the file you want to change and click the pencil icon, or use **Add file → Upload files** to replace a file.
2. Commit the change to `main`.
3. Check the site after a minute or two. If it hasn't updated, check the **Actions** tab for the deployment status.

When replacing files, keep the same names and folder structure. Never delete the `CNAME` file. Without it the site falls back to the github.io address until the domain is re-entered in **Settings → Pages**.

## Domain and DNS

Hosting, DNS, domain verification, and HTTPS are already configured. DNS is managed in Microsoft 365. Do not change the Microsoft 365 email records (MX, SPF, DKIM, DMARC) when making DNS changes.

`fausthr.com` is planned as a short marketing domain. It should be set up as domain forwarding to `https://www.fausthrsolutions.com` at its registrar, not added to GitHub Pages (Pages supports one custom domain per site).

## Contact and data collection

### Contact form

The contact form is sent through [Web3Forms](https://web3forms.com) (free plan: 250 messages per month, with spam protection). It collects name, email, company, phone, topic, and message, and emails each inquiry to the address the access key was created for.
**One-time setup:**
1. Go to https://web3forms.com and create an access key using `catrina.faust@fausthrsolutions.com`.
2. Open the confirmation email and copy the access key.
3. In `index.html`, find `YOUR_ACCESS_KEY` and replace it with the key. Commit the change.
4. Send a test message from the live site and confirm it arrives. Check the junk folder the first time.

Until the key is added, the form shows a message asking visitors to email Catrina directly.

### Planned additions

- Google Analytics 4 and Microsoft Clarity. These collect visitor data, so a privacy policy page should be added along with them. The policy should also cover the contact form.
