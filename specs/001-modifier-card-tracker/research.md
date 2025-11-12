# Research Findings: Modifier Card Tracker

## State Management with Zustand

**Decision**: Use Zustand for state management with localStorage persistence.

**Rationale**: User specified Zustand. It's lightweight, simple API, good for small to medium React apps. Supports middleware for persistence.

**Alternatives Considered**:

- Redux: More boilerplate, overkill for this simple state.
- React Context + useReducer: Built-in but more verbose for complex state.
- MobX: Observable-based, but Zustand is simpler.

## CSS Approach

**Decision**: Use CSS Modules for component styles, PostCSS for nesting and autoprefixing, global CSS for app-wide styles.

**Rationale**: User specified. CSS Modules avoid conflicts, PostCSS enables modern syntax, global for resets/themes.

**Alternatives Considered**:

- Styled Components: CSS-in-JS, but user prefers vanilla CSS.
- Tailwind CSS: Utility-first, but user wants PostCSS nesting.
- Plain CSS: No modules, risk of conflicts.

## Build Tool

**Decision**: Use Vite for development and build.

**Rationale**: User specified. Fast HMR, modern bundler, good for React/TypeScript.

**Alternatives Considered**:

- Create React App: Slower, deprecated, more opinionated.
- Webpack: More config, but Vite is faster.

## Responsive Design

**Decision**: Mobile-first with CSS Grid for layouts, media queries for breakpoints.

**Rationale**: User specified mobile-first. CSS Grid for flexible layouts.

**Alternatives Considered**:

- Flexbox: User prefers Grid where applicable.
- Framework like Bootstrap: But user wants vanilla CSS.

## Local Storage Persistence

**Decision**: Debounced saves to localStorage on state changes.

**Rationale**: User specified. Prevents excessive writes, ensures persistence.

**Alternatives Considered**:

- IndexedDB: Overkill for simple data.
- No persistence: But user wants it.

## Card Visual Representations

**Decision**: Custom SVG icons mimicking Gloomhaven style, no actual card images.

**Rationale**: User specified. Avoids copyright, maintains aesthetic.

**Alternatives Considered**:

- Font icons: Limited customization.
- Images: Copyright issues.
