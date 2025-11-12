import { CardTypeName, Deck } from '../models/types';

/**
 * Calculate the percentage chance of drawing a specific card type
 */
export function calculateDrawPercentage(deck: Deck, cardType: CardTypeName): number {
  const cardCount = deck.cards[cardType] || 0;
  const totalCards = Object.values(deck.cards).reduce((sum, count) => sum + count, 0);
  
  if (totalCards === 0) {
    return 0;
  }
  
  return Math.round((cardCount / totalCards) * 100);
}

/**
 * Calculate the total number of cards remaining in a deck
 */
export function calculateTotalCardsRemaining(deck: Deck): number {
  return Object.values(deck.cards).reduce((sum, count) => sum + count, 0);
}

/**
 * Calculate the total number of cards drawn from a deck
 */
export function calculateTotalCardsDrawn(deck: Deck): number {
  return deck.drawn.length;
}

/**
 * Calculate the original total number of cards in a deck
 */
export function calculateInitialTotalCards(deck: Deck): number {
  return Object.values(deck.initialCards).reduce((sum, count) => sum + count, 0);
}

/**
 * Get statistics for all card types in a deck
 */
export function getDeckStatistics(deck: Deck) {
  const totalRemaining = calculateTotalCardsRemaining(deck);
  const totalDrawn = calculateTotalCardsDrawn(deck);
  const totalInitial = calculateInitialTotalCards(deck);
  
  const cardStats = Object.values(CardTypeName).map(cardType => {
    const remaining = deck.cards[cardType] || 0;
    const percentage = calculateDrawPercentage(deck, cardType);
    const initialCount = deck.initialCards[cardType] || 0;
    const drawnCount = initialCount - remaining;
    
    return {
      cardType,
      remaining,
      percentage,
      initialCount,
      drawnCount,
    };
  }).filter(stat => stat.initialCount > 0); // Only include cards that were in the original deck
  
  return {
    totalRemaining,
    totalDrawn,
    totalInitial,
    cardStats,
  };
}