# Tasks: Modifier Card Tracker for Gloomhaven

**Input**: Design documents from `/specs/001-modifier-card-tracker/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Omitted per constitution v1.0.0 (POC testing standards).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- Paths assume React web app structure with components/, models/, services/, store/, lib/

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan
- [x] T002 Initialize TypeScript + Vite project with React 19, Zustand, PostCSS dependencies
- [x] T003 [P] Configure ESLint and Prettier for linting and formatting

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Define TypeScript types from state-contracts.ts in src/models/types.ts
- [x] T005 Setup Zustand store with localStorage persistence middleware in src/store/store.ts
- [x] T006 [P] Create percentage calculation utility in src/lib/calculations.ts
- [x] T007 [P] Create card type definitions with icons and colors in src/models/cardTypes.ts
- [x] T008 Setup global styles and PostCSS configuration in src/styles/global.css and postcss.config.js
- [x] T009 Create basic App component structure in src/components/App.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Define Initial Decks (Priority: P1) 🎯 MVP

**Goal**: Allow users to set up player and monster decks with specific card types and quantities

**Independent Test**: Verify that users can select card types and quantities for both decks, and the app remembers these settings

### Implementation for User Story 1

- [x] T010 [P] [US1] Create DeckSetup component for deck configuration in src/components/DeckSetup.tsx
- [x] T011 [US1] Implement initializeDecks action in store to set up initial deck state
- [x] T012 [US1] Add deck setup form with card type selectors and quantity inputs in DeckSetup component
- [x] T013 [US1] Integrate DeckSetup into App component with conditional rendering based on isInitialized state

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Track and Display Percentages (Priority: P1)

**Goal**: Display visual stacks of each card type with remaining counts and draw percentages

**Independent Test**: Verify percentages update correctly as cards are drawn from a set up deck

### Implementation for User Story 2

- [x] T014 [P] [US2] Create CardStack component for individual card type display in src/components/CardStack.tsx
- [x] T015 [P] [US2] Create DeckView component to display all card stacks for a deck in src/components/DeckView.tsx
- [x] T016 [US2] Implement percentage calculation logic in calculations.ts utility
- [x] T017 [US2] Integrate DeckView into App component for current deck display

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Draw Cards (Priority: P1)

**Goal**: Enable clicking card types to simulate drawing, updating deck state and percentages

**Independent Test**: Verify clicking card types moves them to drawn pile and updates percentages

### Implementation for User Story 3

- [x] T018 [US3] Implement drawCard action in store to handle card drawing logic
- [x] T019 [US3] Add onDraw handler to CardStack component to trigger draw action
- [x] T020 [US3] Update DeckView to pass draw handler to CardStack components

**Checkpoint**: User Stories 1, 2, and 3 should now be independently functional

---

## Phase 6: User Story 4 - Switch Between Decks (Priority: P2)

**Goal**: Allow quick switching between viewing player and monster decks

**Independent Test**: Verify switching views shows correct deck data without losing state

### Implementation for User Story 4

- [x] T021 [P] [US4] Create Navigation component for deck switching in src/components/Navigation.tsx
- [x] T022 [US4] Implement switchView action in store
- [x] T023 [US4] Integrate Navigation into App component with view switching logic

**Checkpoint**: All P1 stories plus US4 should work independently

---

## Phase 7: User Story 5 - Manage Drawn Pile (Priority: P2)

**Goal**: Display drawn cards and allow returning them to the deck

**Independent Test**: Verify drawn pile shows cards and returning updates deck state

### Implementation for User Story 5

- [x] T024 [P] [US5] Create DrawnPile component for displaying and managing drawn cards in src/components/DrawnPile.tsx
- [x] T025 [US5] Implement returnCard action in store
- [x] T026 [US5] Add drawn pile display to DeckView component
- [x] T027 [US5] Integrate return functionality in DrawnPile component

**Checkpoint**: All P1 and P2 stories should be independently functional

---

## Phase 8: User Story 6 - Reset Functionality (Priority: P3)

**Goal**: Provide reset options for individual decks or entire app state

**Independent Test**: Verify resets restore decks to initial state

### Implementation for User Story 6

- [x] T028 [US6] Implement resetDeck and resetAll actions in store
- [x] T029 [US6] Add reset buttons to Navigation component for deck and app reset
- [x] T030 [US6] Update App component to handle resetAll by showing deck setup

**Checkpoint**: All user stories should now be independently functional

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T031 [P] Add mobile-first responsive styles to all components
- [x] T032 Code cleanup and TypeScript strict mode compliance
- [x] T033 Performance optimization for card draw actions
- [x] T034 [P] Add loading states and error handling
- [x] T035 Run quickstart.md validation and update if needed

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-8)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 9)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Depends on US1 for deck setup
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Depends on US2 for display
- **User Story 4 (P4)**: Can start after Foundational (Phase 2) - No dependencies
- **User Story 5 (P5)**: Can start after Foundational (Phase 2) - Depends on US3 for drawn cards
- **User Story 6 (P6)**: Can start after Foundational (Phase 2) - No dependencies

### Within Each User Story

- Components before integration
- Actions before UI handlers
- Core implementation before polish

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Components within a story marked [P] can run in parallel

---

## Parallel Example: User Story 2

```bash
# Launch all components for User Story 2 together:
Task: "Create CardStack component for individual card type display in src/components/CardStack.tsx"
Task: "Create DeckView component to display all card stacks for a deck in src/components/DeckView.tsx"
```

---

## Implementation Strategy

### MVP First (User Stories 1-3 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. Complete Phase 4: User Story 2
5. Complete Phase 5: User Story 3
6. **STOP and VALIDATE**: Test User Stories 1-3 independently
7. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Add User Story 5 → Test independently → Deploy/Demo
7. Add User Story 6 → Test independently → Deploy/Demo
8. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Stories 1-3 (core functionality)
   - Developer B: User Stories 4-5 (navigation and management)
   - Developer C: User Story 6 + Polish
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
