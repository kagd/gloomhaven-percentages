import React from 'react';
import { DeckViewProps, CardTypeName } from '../models/types';
import { getCardType } from '../models/cardTypes';
import { calculateDrawPercentage } from '../lib/calculations';
import CardStack from './CardStack';

const DeckView: React.FC<DeckViewProps> = ({
  deck,
  onDrawCard,
  onReturnCard,
  onResetDeck,
}) => {
  const deckTitle = deck.type === 'player' ? 'Player Deck' : 'Monster Deck';

  // Get all card types that have cards in this deck
  const activeCardTypes = Object.entries(deck.cards)
    .filter(
      ([_, count]) => count > 0 || deck.initialCards[_ as CardTypeName] > 0
    )
    .map(([cardType, _]) => cardType as CardTypeName);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{deckTitle}</h2>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            <span className="font-medium">
              {Object.values(deck.cards).reduce((sum, count) => sum + count, 0)}
            </span>{' '}
            cards remaining
          </div>
          <button
            type="button"
            onClick={onResetDeck}
            className="button-secondary text-sm"
          >
            Reset Deck
          </button>
        </div>
      </div>

      {/* Card Stacks */}
      {activeCardTypes.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-gray-500 text-lg">No cards in this deck</p>
          <p className="text-gray-400 text-sm mt-2">
            Configure your deck to start tracking
          </p>
        </div>
      ) : (
        <div className="grid grid-4 gap-4">
          {activeCardTypes.map((cardType) => {
            const cardDef = getCardType(cardType);
            const count = deck.cards[cardType] || 0;
            const percentage = calculateDrawPercentage(deck, cardType);

            return (
              <CardStack
                key={cardType}
                cardType={cardType}
                count={count}
                percentage={percentage}
                onDraw={() => onDrawCard(cardType)}
                icon={cardDef.icon}
                color={cardDef.color}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DeckView;
