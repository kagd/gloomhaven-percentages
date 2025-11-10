import React, { useState } from 'react';
import { CardTypeName, DeckSetupProps } from '../models/types';
import { cardTypeCategories, getCardType } from '../models/cardTypes';

const DeckSetup: React.FC<DeckSetupProps> = ({ onSetupComplete }) => {
  const [playerCards, setPlayerCards] = useState<Record<CardTypeName, number>>(
    {} as Record<CardTypeName, number>
  );
  const [monsterCards, setMonsterCards] = useState<
    Record<CardTypeName, number>
  >({} as Record<CardTypeName, number>);
  const [currentTab, setCurrentTab] = useState<'player' | 'monster'>('player');

  const currentCards = currentTab === 'player' ? playerCards : monsterCards;
  const setCurrentCards =
    currentTab === 'player' ? setPlayerCards : setMonsterCards;

  const handleCardCountChange = (cardType: CardTypeName, count: number) => {
    setCurrentCards((prev) => ({
      ...prev,
      [cardType]: Math.max(0, count),
    }));
  };

  const handleSubmit = () => {
    onSetupComplete(playerCards, monsterCards);
  };

  const getTotalCards = (cards: Record<CardTypeName, number>) => {
    return Object.values(cards).reduce((sum, count) => sum + (count || 0), 0);
  };

  const renderCardInput = (cardType: CardTypeName) => {
    const cardDef = getCardType(cardType);
    const count = currentCards[cardType] || 0;

    return (
      <div key={cardType} className="card p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 flex items-center justify-center rounded"
              style={{ backgroundColor: cardDef.color, color: 'white' }}
            >
              <img src={cardDef.icon} alt={cardDef.name} className="w-5 h-5" />
            </div>
            <span className="font-medium">{cardDef.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleCardCountChange(cardType, count - 1)}
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white hover:bg-gray-50"
            disabled={count === 0}
          >
            −
          </button>

          <input
            type="number"
            min="0"
            max="20"
            value={count}
            onChange={(e) =>
              handleCardCountChange(cardType, parseInt(e.target.value) || 0)
            }
            className="w-16 text-center border border-gray-300 rounded px-2 py-1"
          />

          <button
            type="button"
            onClick={() => handleCardCountChange(cardType, count + 1)}
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white hover:bg-gray-50"
          >
            +
          </button>
        </div>
      </div>
    );
  };

  const renderCategory = (title: string, cardTypes: CardTypeName[]) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      <div className="grid grid-3 gap-3">{cardTypes.map(renderCardInput)}</div>
    </div>
  );

  const hasAnyCards =
    getTotalCards(playerCards) > 0 || getTotalCards(monsterCards) > 0;

  return (
    <div className="card">
      {/* Tab Navigation */}
      <div className="flex mb-6 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setCurrentTab('player')}
          className={`flex-1 py-3 px-4 text-center font-medium border-b-2 transition-colors ${
            currentTab === 'player'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Player Deck ({getTotalCards(playerCards)} cards)
        </button>
        <button
          type="button"
          onClick={() => setCurrentTab('monster')}
          className={`flex-1 py-3 px-4 text-center font-medium border-b-2 transition-colors ${
            currentTab === 'monster'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Monster Deck ({getTotalCards(monsterCards)} cards)
        </button>
      </div>

      {/* Card Selection */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Setup {currentTab === 'player' ? 'Player' : 'Monster'} Deck
        </h2>

        {renderCategory('Basic Modifiers', cardTypeCategories.basic)}
        {renderCategory('Conditions', cardTypeCategories.conditions)}
        {renderCategory('Effects', cardTypeCategories.effects)}
        {renderCategory('Elements', cardTypeCategories.elements)}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!hasAnyCards}
          className="button-primary flex-1"
        >
          Start Tracking
        </button>
      </div>

      {!hasAnyCards && (
        <p className="text-sm text-gray-500 mt-2 text-center">
          Add cards to at least one deck to start tracking
        </p>
      )}
    </div>
  );
};

export default DeckSetup;
