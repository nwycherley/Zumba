# Zumba with Hannah — GitHub Pages website

A responsive, accessible static website inspired by the original flyer: cream paper tones, pink and olive accents, handwritten-style headings, class details, benefits and WhatsApp contact links.

## Files

- `index.html` — page content and structure
- `style.css` — colours, layout, responsive design and reduced-motion support
- `script.js` — accessible mobile navigation and current footer year

## Preview locally

Open `index.html` in a web browser. An internet connection is needed to load the Google Fonts and the remote hero photo.

## Publish with GitHub Pages

1. Sign in or create an account at https://github.com/.
2. Create a new repository, for example `zumba-with-hannah`.
3. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root (the top level, not inside another folder).
4. Open the repository **Settings**.
5. In the left sidebar, choose **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch `main` and folder `/(root)`, then click **Save**.
8. Wait a minute or two. The Pages screen will show the published URL, usually `https://YOUR-USERNAME.github.io/zumba-with-hannah/`.

Every time you update and commit the files to the selected branch, GitHub Pages will publish the changes.

## Before publishing

- Confirm the current class schedule and price with Hannah.
- The flyer’s start date is deliberately omitted because it is unconfirmed.
- The WhatsApp link uses the flyer number `07725 165259`, formatted internationally as `447725165259`.
- The hero photo is loaded from Unsplash and Google Fonts are loaded from Google Fonts. If you prefer to host all assets yourself, download properly licensed images and store them in the repository, then update the image URL in `index.html`.
- The website does not collect personal data or process payments.

## Customising

- Edit the text and links in `index.html`.
- Change the palette near the top of `style.css` in the `:root` variables.
- The WhatsApp message text is encoded into each `https://wa.me/` link.
