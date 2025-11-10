# Feature Specification: Modifier Card Tracker for Gloomhaven

**Feature Branch**: `001-modifier-card-tracker`  
**Created**: November 10, 2025  
**Status**: Draft  
**Input**: User description: "Build an application that will track the percentages that specific modifier cards will be pulled for the tabletop game Gloomhaven.

I need the ability to define which specific cards my character has and those for the monster deck has.

Since the turns alternate between monsters and players the application needs to allow for quick switching between my cards and the monster cards.

Player decks and monster decks are independent of each other.

Both the player and monster decks will be "drawn" from separately. When a card is drawn it should be removed from the deck and put in the "drawn" pile. The percentages for specific cards should change when a particular card is drawn. Percentages should only be shown for the cards that are still in the deck.

I want to see stacks of each type of card. Next to each stack display the count remaning and the percentage that it will be the next one drawn.

I want the ability to click on a card type to act as the "draw" effect.

I also want to see a drawn pile. That should show the number of cards drawn. Upon clicking on the drawn pile it should show the specific cards that have been drawn so far. From there I want the ability to "return" a card back to the deck which will update the percentages accordingly. This will be useful for when I will inevitably make a mistake while clicking cards.

Since there are cards that cause the player or the monster to reshuffle the deck, this app needs to be able to reset each deck and the percentages accordingly.

I want to have a visual representation of each type of card. Try to stick with the Gloomhaven art style as much as possible. I don't want images of the actual cards, just a representation of them in a similar style.

The types of possible cards are: +0, +1, +2, -1, -2, 2x, miss, curse, stun, bless, wound, poison, immobilize, disarm, muddle, push, pull, add target, heal, shield, fire, ice, air, earth, light, dark.

This application should take a Mobile-first approach as the majority of the time it will be used on a phone while playing the game.

I want to be able to reset both decks independently.

The app needs to be able to reset the entire state in case I want to start over from scratch.

Whenever the user is first interacting with the app, or the state has been reset, the application should prompt the user to define the initial decks for both the player and the monsters. This includes selecting which specific modifier cards are included in each deck and their quantities."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Define Initial Decks (Priority: P1)

As a Gloomhaven player, I want to set up my player deck and the monster deck with specific card types and quantities so that I can start tracking percentages accurately.

**Why this priority**: This is the foundation for all other functionality; without defined decks, no tracking can occur.

**Independent Test**: Can be fully tested by verifying that users can select card types and quantities for both decks, and the app remembers these settings.

**Acceptance Scenarios**:

1. **Given** the app is launched or reset, **When** the user is prompted to define decks, **Then** they can select card types and quantities for player and monster decks.
2. **Given** decks are defined, **When** the user confirms, **Then** the app displays the deck setup and is ready for drawing.

---

### User Story 2 - Track and Display Percentages (Priority: P1)

As a Gloomhaven player, I want to see visual stacks of each card type with remaining counts and draw percentages so that I can make informed decisions during gameplay.

**Why this priority**: Core value proposition - tracking percentages is the main feature.

**Independent Test**: Can be fully tested by setting up a deck, viewing the display, and verifying counts and percentages update correctly.

**Acceptance Scenarios**:

1. **Given** a deck is set up, **When** viewing the deck, **Then** each card type shows as a stack with remaining count and percentage chance to be next drawn.
2. **Given** percentages are displayed, **When** cards are drawn, **Then** percentages update in real-time for remaining cards.

---

### User Story 3 - Draw Cards (Priority: P1)

As a Gloomhaven player, I want to click on a card type to simulate drawing it so that the deck state updates and I can continue tracking.

**Why this priority**: Essential interaction for using the tracker during games.

**Independent Test**: Can be fully tested by clicking card types and verifying they move to drawn pile and percentages update.

**Acceptance Scenarios**:

1. **Given** a deck with cards, **When** clicking a card type, **Then** one instance is removed from the deck and added to drawn pile.
2. **Given** a card is drawn, **When** viewing percentages, **Then** only remaining cards show percentages.

---

### User Story 4 - Switch Between Decks (Priority: P2)

As a Gloomhaven player, I want to quickly switch between viewing player and monster decks so that I can track both during alternating turns.

**Why this priority**: Improves usability during gameplay by allowing fast context switching.

**Independent Test**: Can be fully tested by switching views and verifying correct deck data is shown.

**Acceptance Scenarios**:

1. **Given** both decks are set up, **When** switching to player deck, **Then** player cards and percentages are displayed.
2. **Given** viewing one deck, **When** switching to the other, **Then** the other deck's state is shown without losing data.

---

### User Story 5 - Manage Drawn Pile (Priority: P2)

As a Gloomhaven player, I want to view drawn cards and return them to the deck so that I can correct mistakes and maintain accurate tracking.

**Why this priority**: Error correction is important for reliable tracking during games.

**Independent Test**: Can be fully tested by drawing cards, viewing drawn pile, and returning cards to verify deck updates.

**Acceptance Scenarios**:

1. **Given** cards are drawn, **When** clicking drawn pile, **Then** list of drawn cards is shown.
2. **Given** viewing drawn cards, **When** selecting a card to return, **Then** it moves back to deck and percentages update.

---

### User Story 6 - Reset Functionality (Priority: P3)

As a Gloomhaven player, I want to reset individual decks or the entire app state so that I can handle reshuffles or start new games.

**Why this priority**: Necessary for game flow but less frequent than core tracking.

**Independent Test**: Can be fully tested by resetting decks and verifying they return to initial state.

**Acceptance Scenarios**:

1. **Given** a deck has drawn cards, **When** resetting that deck, **Then** all cards return to deck and percentages reset.
2. **Given** any state, **When** resetting entire app, **Then** user is prompted to redefine decks.

---

### Edge Cases

- What happens when trying to draw from an empty deck?
- How does the app handle decks with no cards of a particular type?
- What if user tries to return a card that wasn't drawn?
- How does the app behave with very large deck sizes?
- What happens if user navigates away and returns (state persistence)?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST allow users to define initial player and monster decks by selecting card types and quantities.
- **FR-002**: System MUST display card types as visual stacks showing remaining count and draw percentage.
- **FR-003**: System MUST enable clicking card types to simulate drawing, moving cards to drawn pile.
- **FR-004**: System MUST update percentages in real-time as cards are drawn.
- **FR-005**: System MUST allow quick switching between player and monster deck views.
- **FR-006**: System MUST display drawn pile with count and allow viewing specific drawn cards.
- **FR-007**: System MUST allow returning individual cards from drawn pile back to deck.
- **FR-008**: System MUST provide reset functionality for individual decks.
- **FR-009**: System MUST provide reset functionality for entire app state.
- **FR-010**: System MUST use visual representations of cards in Gloomhaven art style.
- **FR-011**: System MUST be mobile-first designed for phone usage.
- **FR-012**: System MUST support all specified card types: +0, +1, +2, -1, -2, 2x, miss, curse, stun, bless, wound, poison, immobilize, disarm, muddle, push, pull, add target, heal, shield, fire, ice, air, earth, light, dark.
- **FR-013**: System MUST maintain independent state for player and monster decks.
- **FR-014**: System MUST only show percentages for cards remaining in deck.

### Key Entities _(include if feature involves data)_

- **Deck**: Represents either player or monster deck, contains card types with quantities, tracks drawn cards.
- **Card Type**: Represents one of the 26 possible modifier card types, with visual representation and quantity.
- **Drawn Pile**: Collection of drawn cards that can be returned to deck.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Users can set up initial decks in under 2 minutes on mobile devices.
- **SC-002**: Card draw actions complete in under 1 second with immediate percentage updates.
- **SC-003**: Deck switching takes under 0.5 seconds.
- **SC-004**: Percentages are calculated accurately for decks up to 100 cards.
- **SC-005**: App functions reliably on phones with screens 320px wide or larger.
- **SC-006**: Users can complete a full game session (multiple draws and resets) without app crashes.
- **SC-007**: Visual card representations are recognizable and match Gloomhaven aesthetic.
