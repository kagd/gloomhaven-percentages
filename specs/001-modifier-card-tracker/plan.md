# Implementation Plan: Modifier Card Tracker for Gloomhaven

**Branch**: `001-modifier-card-tracker` | **Date**: November 10, 2025 | **Spec**: [link to spec.md]
**Input**: Feature specification from `/specs/001-modifier-card-tracker/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a mobile-first web application for tracking Gloomhaven modifier card draw percentages. Users can define player and monster decks, draw cards, view percentages, manage drawn piles, and reset decks. Uses Vite + React + TypeScript + Zustand for state management, with local storage persistence.

## Technical Context

**Language/Version**: TypeScript (ES2020+ for modern features)  
**Primary Dependencies**: Vite (build tool), React 19 (UI framework), Zustand (state management), PostCSS (CSS processing)  
**Storage**: Browser localStorage (client-side persistence)  
**Testing**: Omitted for POC (per constitution)  
**Target Platform**: Web browsers (mobile-first responsive design)  
**Project Type**: Web application (single-page app)  
**Performance Goals**: <2s response times, <1s for card draw actions, <0.5s deck switching  
**Constraints**: Mobile-first (320px+ width), offline-capable (localStorage), no backend server  
**Scale/Scope**: Small app (~26 card types, decks up to 100 cards, simple state management)

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

**Code Quality**: PASS - Uses TypeScript, React best practices, modular design.
**Testing Standards**: PASS - Omitted for POC as per constitution v1.0.0.
**User Experience Consistency**: PASS - Mobile-first design, consistent UI.
**Performance Requirements**: PASS - Targets <2s response times, optimized for mobile.
**Development Workflow**: PASS - Using feature branch `001-modifier-card-tracker`.
**Governance**: PASS - Plan complies with constitution v1.0.0.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
