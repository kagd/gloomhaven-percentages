# Data Model: Modifier Card Tracker

## Entities

### CardType

Represents one of the 26 possible Gloomhaven modifier card types.

**Fields**:

- `name`: string (enum: '+0', '+1', '+2', '-1', '-2', '2x', 'miss', 'curse', 'stun', 'bless', 'wound', 'poison', 'immobilize', 'disarm', 'muddle', 'push', 'pull', 'add target', 'heal', 'shield', 'fire', 'ice', 'air', 'earth', 'light', 'dark')
- `icon`: string (SVG path or data URL for visual representation)
- `color`: string (hex color for UI theming)

**Validation Rules**:

- Name must be one of the predefined types
- Icon must be valid SVG
- Color must be valid hex

### Deck

Represents either player or monster deck with current state.

**Fields**:

- `id`: string ('player' | 'monster')
- `cards`: Record<CardType['name'], number> (remaining counts)
- `drawn`: CardType['name'][] (drawn cards in order)
- `initialCards`: Record<CardType['name'], number> (original setup for reset)

**Relationships**:

- Has many CardType instances (via cards counts)
- Has one DrawnPile (drawn array)

**Validation Rules**:

- Cards counts must be >= 0
- Total cards + drawn must equal initial totals
- Drawn can only contain types that were in initial deck

**State Transitions**:

- Draw: Decrement cards[type], push to drawn
- Return: Pop from drawn, increment cards[type]
- Reset: cards = initialCards, drawn = []

### DrawnPile

Collection of drawn cards that can be returned.

**Fields**:

- `cards`: CardType['name'][] (ordered list of drawn cards)

**Relationships**:

- Belongs to Deck

**Validation Rules**:

- Cards must be valid CardType names
- Can only return cards that exist in pile

### AppState

Top-level application state.

**Fields**:

- `playerDeck`: Deck
- `monsterDeck`: Deck
- `currentView`: 'player' | 'monster'
- `isInitialized`: boolean (whether decks have been set up)

**Relationships**:

- Has one playerDeck
- Has one monsterDeck

**Validation Rules**:

- Decks must be valid
- If not initialized, prompt for setup

## Data Flow

1. **Initialization**: Load from localStorage or prompt setup
2. **Setup**: User defines initialCards for both decks
3. **Draw**: Update deck state, save to localStorage
4. **Return**: Update deck state, save to localStorage
5. **Reset**: Restore initial state, save to localStorage
6. **Switch View**: Change currentView (no save needed)
