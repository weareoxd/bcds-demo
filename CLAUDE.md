# BC Design System Demo

A Vite + React + TypeScript app showcasing every component from
`@bcgov/design-system-react-components`, plus a responsive sample page
template.

## Commands

- `npm run dev` — dev server (default port 4839, falls back if in use)
- `npm run build` — `tsc -b` then `vite build`
- `npm run lint` — ESLint
- `npm run preview` — preview the production build

## Routes

- `/` (`src/App.tsx`) — full component showcase, one section per
  component, with a sticky "on this page" sidenav and a
  structure-mode toggle (see below).
- `/sample` (`src/pages/SamplePage.tsx`) — a responsive starter
  template demonstrating a typical page composition (header,
  breadcrumbs, an optional hero banner, an optional sidenav, main
  content, footer) built from the design system's components. Copy
  this file as the starting point for new pages. The sidenav is a
  plain, static anchor list (no sticky positioning, no scroll-spy JS)
  — kept deliberately minimal since this is a copy-paste starting
  point, not a showcase feature. The hero and the sidenav are each
  toggled by a single `SHOW_HERO` / `SHOW_SIDENAV` constant at the top
  of the file — flip either to see the layout adapt (the page's `<h1>`
  moves to the Overview section automatically when the hero is off;
  the content column self-centers via CSS `:only-child` when the
  sidenav is off).

## Conventions

- **CSS namespacing**: `@bcgov/design-system-react-components` scopes
  its internal styles as `bcds-{ComponentName}--{part}` (e.g.
  `bcds-Alert-Banner--Container`). Page-level CSS in this repo follows
  the same pattern: prefix classes with the page/component name, e.g.
  `bcds-sample-page`, `bcds-sample-page--sidenav`. Never write bare/
  generic class names (`.sidenav`, `.main`) for anything reused beyond
  a single page — namespace it so styles can't leak or collide.
- **Design tokens**: colors, spacing, etc. come from
  `@bcgov/design-tokens` as CSS custom properties. Two copies exist:
  `--bcds-*` prefixed vars (imported in `src/index.css` from
  `css-prefixed/variables.css` — use these in page-level/app CSS) and
  the same tokens unprefixed (`--surface-*`, `--typography-*`, etc.,
  auto-injected into `:root` by `@bcgov/design-system-react-components`
  itself the moment any of its components render — used internally by
  that package, and by our own `bcds-react-aria-*` components in
  `src/components/`, see below). Don't hand-roll a third copy of the
  same values.
- **`src/components/`** holds local components built the same way the
  upstream design system builds its own: wrap a primitive from
  `react-aria-components` directly (not the higher-level
  `@bcgov/design-system-react-components` wrapper, which already has
  its own opinionated styling), namespace classes as
  `bcds-react-aria-{Component}--{Part}`, and style off the unprefixed
  design tokens and React Aria data-attribute selectors
  (`[data-hovered]`, `[data-focus-visible]`, `[data-current]`,
  `[data-disabled]`, etc.) — see `src/components/Breadcrumbs.tsx` for
  the pattern to follow when extracting the next one.
- **`src/components/PageBand.tsx`** is the one full-width layout
  primitive: a full-bleed outer element wrapping a centred, max-width,
  consistently-padded inner element (`bcds-page-band` /
  `bcds-page-band--inner`). Anything that needs to span the full page
  width — a breadcrumb bar, a hero banner, a content row — should
  render through `PageBand` rather than re-declaring its own
  max-width/padding, so every full-width section stays pixel-identical
  without negative margins. `bandClassName` styles the full-bleed outer
  (background, borders, vertical padding); `className` styles the
  centred inner (content layout — flex, grid, gap). `Breadcrumbs` and
  `SamplePage`'s hero/body rows are both built on it.
- **`App.tsx`'s structure-mode toggle** (`src/styleContext.tsx`,
  `src/styles.ts`) is a demo-only feature: it swaps the showcase's
  *layout* class/style application between plain CSS, inline styles,
  Bootstrap (loaded from CDN), and Tailwind, purely to compare
  approaches side-by-side. It has nothing to do with the design
  system's own component styling and shouldn't be copied into real
  pages — `/sample` intentionally does not use it.
- Naming: this project replaced an earlier "Single Digital Gateway" /
  `sdg-` prefixed naming scheme with "BCDS" / `bcds-`. If you see `sdg-`
  or "Single Digital Gateway" anywhere, it's stale and should be
  updated to match.

## Deployment

Built for GitHub Pages: `vite.config.ts` sets `base: '/bcds-demo/'` for
production builds only (dev server still serves from `/`). See the
GitHub Actions deploy workflow for details.
