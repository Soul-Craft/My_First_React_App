# My First React App

The Create React App starter page (spinning logo, "Welcome to React"), now built with [Vite](https://vite.dev) and
React 19. It also initialises a Firebase app on load.

## Scripts

- `npm run dev` serves the app with hot reload on http://localhost:3100.
- `npm test` runs the tests once with Vitest (jsdom).
- `npm run build` writes the production bundle to `dist/`.
- `npm run preview` serves `dist/` on http://localhost:3101.

Ports 3100 and 3101 come from the owner's per-account port block on their Mac, so they are fixed (`strictPort`).

## Dependencies

Dependabot checks npm and GitHub Actions daily; CI merges each update once the build passes.

`package.json` overrides `@grpc/grpc-js` to the current 1.x. Firebase's Firestore still pins `~1.9.0`, which has
known advisories (GHSA-m9gg-hp2v-232j, GHSA-f596-whhp-79r4) fixed in 1.13.6. Drop the override once Firestore's own
range reaches a fixed version.
