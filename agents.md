# AI Agent Guide for "Mąstymo klaidų bingo"

This document provides context and instructions for AI agents working on this
project.

## Project Overview

This is a **minimal frontend application** built to track cognitive distortions
("Mąstymo klaidų bingo"). Users can click on various cognitive errors (e.g.,
"Viskas arba nieko", "Emocinis mąstymas") to increment a counter. Ideally used
for CBT (Cognitive Behavioral Therapy) exercises.

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Vanilla CSS usage via Tailwind utility classes)
- **Icons**: Lucide React
- **Deployment**: Docker (Nginx serving static build)

## Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── App.tsx          # MAIN LOGIC. Contains the entire application state and UI.
│   ├── main.tsx         # Entry point, mounts App.tsx
│   ├── index.css        # Tailwind directives
│   └── vite-env.d.ts    # Vite types
├── Dockerfile           # Multi-stage build for production (Coolify)
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── index.html           # HTML entry point
```

## Key Files

- **`src/App.tsx`**:
  - Contains the `ERRORS` configuration (list of cognitive distortions).
  - Manages state: `counts` (saved to localStorage), `boardIds` (shuffled grid),
    `selectedId` (highlight).
  - Features: Grid rendering, Export/Import (JSON), Reset functionality, "Bonus"
    section.
- **`Dockerfile`**:
  - Stage 1: Node.js build (`npm run build`).
  - Stage 2: Nginx alpine image simply serving the `/dist` folder.

## Development Commands

- **Install**: `npm install`
- **Start Dev Server**: `npm run dev` (starts on port 5173 by default)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview`

## Architectural Guidelines

1. **Simplicity**: Keep logic in `App.tsx` unless it grows significantly larger.
2. **Styling**: Use Tailwind utility classes directly in JSX.
3. **Persistence**: State is persisted in `localStorage` under key
   `bingo_cognitive_v2`.
4. **Deployment**: The project is designed to be stateless/static, served via
   Nginx.
