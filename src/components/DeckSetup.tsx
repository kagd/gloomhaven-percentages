import React, { useState } from 'react';
import { CardTypeName, DeckSetupProps } from '../models/types';
import { cardTypeCategories } from '../models/cardTypes';
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

  const hasAnyCards =
    getTotalCards(playerCards) > 0 || getTotalCards(monsterCards) > 0;

  return (
    <div>
      <TabNavigation
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        playerCardCount={getTotalCards(playerCards)}
        monsterCardCount={getTotalCards(monsterCards)}
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wide">
          Setup {currentTab === 'player' ? 'Player' : 'Monster'} Deck
        </h2>

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

      <ActionPanel hasAnyCards={hasAnyCards} onSubmit={handleSubmit} />
    </div>
  );
};

export default DeckSetup;
