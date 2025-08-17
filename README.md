# Complete Space Renovations — Small Business Website

A modern, responsive, one-page website suitable for a remodeling business. Swap copy, colors, and images as needed.

## Quick Start
1. **Replace placeholders** in `index.html`:
   - Phone number, email, and address.
   - Form action (Formspree) — create a free Formspree project and replace `your-form-id`.
2. **Add your images**:
   - Replace files in `/assets/gallery*.jpg` and hero/about placeholders.
3. **Open locally**:
   - Double-click `index.html`, or use any static server.
4. **Deploy free** (pick one):
   - **Netlify**: Drag the folder into https://app.netlify.com/drop — set a custom domain later.
   - **Cloudflare Pages** or **GitHub Pages**: Upload the folder and deploy as a static site.

## Customization
- Colors are controlled in `css/styles.css` via CSS variables (search for `:root`).
- Logo is a simple SVG in `/assets/logo.svg` — swap with your own if preferred.
- SEO: Update `<title>`, meta description, and OpenGraph tags in `<head>`.

## Contact Form
This site uses Formspree (no backend required). Create a form and replace the `action` URL in the `<form>` tag. Optionally set the success redirect to `/contact-success.html`.

## Notes
- Accessibility: Includes skip link, labeled form inputs, and keyboard-friendly navigation.
- Performance: Lightweight SVG placeholders; lazy-loaded gallery.
