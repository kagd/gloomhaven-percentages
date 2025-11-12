// Component Contracts: React component prop interfaces

import { CardTypeName, Deck } from './state-contracts';

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
  onSetupComplete: (playerCards: Record<CardTypeName, number>, monsterCards: Record<CardTypeName, number>) => void;
}

export interface NavigationProps {
  currentView: 'player' | 'monster';
  onSwitchView: (view: 'player' | 'monster') => void;
  onResetAll: () => void;
}