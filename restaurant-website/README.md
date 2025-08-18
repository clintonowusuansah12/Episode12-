# BiteBurst Restaurant Website

A fast, modern, responsive static website for a restaurant/fast food brand. Includes hero, menu with filters, about, locations, order online, catering with inquiry form, contact, testimonials, blog highlights, gallery, and newsletter signup.

## Quick start

1. Open this folder in your editor or terminal.
2. Start a local static server:

```bash
cd /workspace/restaurant-website
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Structure

- `index.html`: Single-page site with anchored sections
- `assets/css/styles.css`: Themeable styles with multiple color palettes
- `assets/js/scripts.js`: Mobile nav, menu filtering, and form handlers (demo)
- `assets/images/`: Put your images here (hero, menu, gallery, logos)
- `assets/icons/`: SVGs or icon assets
- `robots.txt`: Basic SEO crawling config

## Customize branding

- Update the brand name in `index.html` (search for "BiteBurst").
- Replace the hero and card images with your own in `assets/images/` and update `src` attributes.
- Adjust the color theme by changing the body class:

```html
<body class="theme-fastfood">
```

Available themes: `theme-fastfood` (red/yellow), `theme-organic` (greens), `theme-orange`, `theme-blackwhite`, `theme-seafood` (blues).

Or customize CSS variables in `:root` of `assets/css/styles.css`.

## Navigation

All links in the navbar scroll to sections on the same page. The Menu item has a simple dropdown and in-page filters for Food, Drinks, and Specials.

## Forms

The newsletter, contact, and catering forms are wired with client-side demo handlers only. To make them functional, connect to your backend or a form service (e.g., Netlify Forms, Formspree), or POST to your own endpoint.

## SEO basics

- Set the correct `<title>` and `<meta name="description">` in `index.html`.
- Add real Open Graph metadata (URL, image) for sharing previews.
- Fill `alt` text for your images.
- Add a `sitemap.xml` at the site root and update `robots.txt` accordingly if you deploy under a subpath.

## Performance tips

- Compress and resize images for the web; prefer modern formats (WebP/AVIF) with fallbacks.
- Use `loading="lazy"` on non-critical images (already done).
- Keep CSS and JS minimal; consider bundling if the site grows.

## Deployment

This is a static site; you can host it on any static host (Netlify, GitHub Pages, Vercel, S3, etc.).

---

Made with ❤️ for delicious food.

