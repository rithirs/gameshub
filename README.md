# GamesHub

A collection of simple games built with Next.js, TypeScript, and TailwindCSS. Hosted on GitHub Pages.

## Features
- Professional code standards, strict TypeScript
- Responsive, clean UI with TailwindCSS
- Minimal dependencies
- One game included: Tic-Tac-Toe
- Ready for GitHub Pages deployment

## Getting Started

### Prerequisites
- Node.js (via Homebrew or other)
- Git

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### Build static site
```bash
npm run build
```
Output will be in `out/` for static hosting.

### Deploy to GitHub Pages
1. Push to GitHub.
2. Set repository settings for GitHub Pages to use the `gh-pages` branch and `/` (root) folder.
3. Workflow will deploy on push to `main`.

## Project Structure
- `pages/` — Next.js routes
- `components/` — Reusable UI components
- `games/` — Game logic (one file per game)
- `styles/` — Global Tailwind config

## Adding More Games
- Add new game logic to `games/`
- Create a new component in `components/`
- Add a new route in `pages/`

## Lighthouse & Bundle Optimization
- Minimal dependencies
- Static export for fast hosting
- TailwindCSS for small CSS bundle

## License
MIT
