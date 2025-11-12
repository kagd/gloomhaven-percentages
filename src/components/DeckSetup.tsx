import React, { useState, useEffect } from 'react';
import { CardTypeName, DeckSetupProps } from '../models/types';
import { cardTypeCategories, getInitialMonsterDeck } from '../models/cardTypes';
import TabNavigation from './TabNavigation';
import CardCategory from './CardCategory';
import ActionPanel from './ActionPanel';

const DeckSetup: React.FC<DeckSetupProps> = ({ onSetupComplete }) => {
  const [playerCards, setPlayerCards] = useState<Record<CardTypeName, number>>(
    {} as Record<CardTypeName, number>
  );
  const [monsterCards, setMonsterCards] = useState<
    Record<CardTypeName, number>
  >({} as Record<CardTypeName, number>);
  const [currentTab, setCurrentTab] = useState<'player' | 'monster'>('player');

  // Initialize monster deck with default configuration on mount
  useEffect(() => {
    const initialMonsterCards = getInitialMonsterDeck();
    setMonsterCards((prev) => ({
      ...prev,
      ...initialMonsterCards,
    }));
  }, []);

  const currentCards = currentTab === 'player' ? playerCards : monsterCards;
  const setCurrentCards =
    currentTab === 'player' ? setPlayerCards : setMonsterCards;

  const handleCardCountChange = (cardType: CardTypeName, count: number) => {
    setCurrentCards((prev) => ({
      ...prev,
      [cardType]: Math.max(0, count),
    }));
  };

  const resetMonsterDeck = () => {
    const initialMonsterCards = getInitialMonsterDeck();
    setMonsterCards({ ...initialMonsterCards } as Record<CardTypeName, number>);
  };

  const resetPlayerDeck = () => {
    setPlayerCards({} as Record<CardTypeName, number>);
  };

  const resetCurrentDeck = () => {
    if (currentTab === 'monster') {
      resetMonsterDeck();
    } else {
      resetPlayerDeck();
    }
  };

  const handleSubmit = () => {
    onSetupComplete(playerCards, monsterCards);
  };

  const getTotalCards = (cards: Record<CardTypeName, number>) => {
    return Object.values(cards).reduce((sum, count) => sum + (count || 0), 0);
  };

  const playerCardCount = getTotalCards(playerCards);
  const monsterCardCount = getTotalCards(monsterCards);

  const hasAnyCards = playerCardCount > 0 || monsterCardCount > 0;
  const monsterDeckValid = monsterCardCount >= 20;
  const canSubmit = hasAnyCards && monsterDeckValid;

  return (
    <div>
      <TabNavigation
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        playerCardCount={playerCardCount}
        monsterCardCount={monsterCardCount}
      />

      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wide">
            Setup {currentTab === 'player' ? 'Player' : 'Monster'} Deck
          </h2>
          <button
            onClick={resetCurrentDeck}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors duration-200"
          >
            Reset {currentTab === 'player' ? 'Player' : 'Monster'} Deck
          </button>
        </div>

        <CardCategory
          title="Basic Modifiers"
          cardTypes={cardTypeCategories.basic}
          cardCounts={currentCards}
          onCardCountChange={handleCardCountChange}
        />

        <CardCategory
          title="Conditions"
          cardTypes={cardTypeCategories.conditions}
          cardCounts={currentCards}
          onCardCountChange={handleCardCountChange}
        />

        <CardCategory
          title="Effects"
          cardTypes={cardTypeCategories.effects}
          cardCounts={currentCards}
          onCardCountChange={handleCardCountChange}
        />

        <CardCategory
          title="Elements"
          cardTypes={cardTypeCategories.elements}
          cardCounts={currentCards}
          onCardCountChange={handleCardCountChange}
        />
      </div>

      <ActionPanel
        hasAnyCards={hasAnyCards}
        canSubmit={canSubmit}
        monsterCardCount={monsterCardCount}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default DeckSetup;
