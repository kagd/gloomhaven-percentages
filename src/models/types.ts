// TypeScript types for the Gloomhaven modifier card tracker

export enum CardTypeName {
  PlusZero = '+0',
  PlusOne = '+1',
  PlusTwo = '+2',
  MinusOne = '-1',
  MinusTwo = '-2',
  Double = '2x',
  Miss = 'miss',
  Curse = 'curse',
  Stun = 'stun',
  Bless = 'bless',
  Wound = 'wound',
  Poison = 'poison',
  Immobilize = 'immobilize',
  Disarm = 'disarm',
  Muddle = 'muddle',
  Push = 'push',
  Pull = 'pull',
  AddTarget = 'add target',
  Heal = 'heal',
  Shield = 'shield',
  Fire = 'fire',
  Ice = 'ice',
  Air = 'air',
  Earth = 'earth',
  Light = 'light',
  Dark = 'dark',
}

export interface CardType {
  name: CardTypeName;
  icon: string; // SVG path
  color: string; // hex color
}

export enum DeckType {
  Player = 'player',
  Monster = 'monster',
}

export interface Deck {
  type: DeckType;
  cards: Record<CardTypeName, number>; // remaining counts
  drawn: CardTypeName[]; // drawn cards in order
  initialCards: Record<CardTypeName, number>; // original setup
}

export interface AppState {
  playerDeck: Deck;
  monsterDeck: Deck;
  currentView: DeckType;
  isInitialized: boolean;
}

// State actions
export interface StateActions {
  initializeDecks: (
    playerCards: Record<CardTypeName, number>,
    monsterCards: Record<CardTypeName, number>
  ) => void;
  drawCard: (deckType: DeckType, cardType: CardTypeName) => void;
  returnCard: (deckType: DeckType, cardIndex: number) => void;
  resetDeck: (deckType: DeckType) => void;
  resetAll: () => void;
  switchView: (view: DeckType) => void;
}

// Component prop interfaces
export interface DeckViewProps {
  deck: Deck;
  onDrawCard: (cardType: CardTypeName) => void;
  onReturnCard: (cardIndex: number) => void;
  onResetDeck: () => void;
}

export interface CardStackProps {
  cardType: CardTypeName;
  count: number;
  percentage: number;
  onDraw: () => void;
  icon: string;
  color: string;
}

export interface DrawnPileProps {
  drawnCards: CardTypeName[];
  onReturnCard: (index: number) => void;
}

export interface DeckSetupProps {
  onSetupComplete: (
    playerCards: Record<CardTypeName, number>,
    monsterCards: Record<CardTypeName, number>
  ) => void;
}

export interface NavigationProps {
  currentView: DeckType;
  onSwitchView: (view: DeckType) => void;
  onResetAll: () => void;
}