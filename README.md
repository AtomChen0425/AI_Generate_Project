# Photograph

## Structure

- `app/page.tsx`: Home gallery shell with hero, route links, and the animated portfolio gallery.
- `app/about/page.tsx`: Editorial about page with portrait, artist statement, gear stack, and contacts.
- `app/collections/page.tsx`: Filter-focused collection view reusing the animated gallery.
- `components/portfolio-gallery.tsx`: Client-side masonry grid, animated category tabs, hover metadata, and full-screen lightbox.
- `data/portfolio.ts`: Photo records and about-page content.
- `app/globals.css`: Dark/light design system, spacing, borders, and responsive layout rules.

## Notes

- The home page defaults to the dark theme.
- The gallery uses `framer-motion` layout and presence transitions for smooth filtering and modal entry/exit.
