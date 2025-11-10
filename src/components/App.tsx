import React from 'react';
import useStore from '../store/store';
import { DeckType, CardTypeName } from '../models/types';
import DeckSetup from './DeckSetup';
import DeckView from './DeckView';
import Navigation from './Navigation';
import DrawnPile from './DrawnPile';
import '../styles/global.css';

const App: React.FC = () => {
  const {
    isInitialized,
    currentView,
    playerDeck,
    monsterDeck,
    initializeDecks,
    drawCard,
    returnCard,
    resetDeck,
    resetAll,
    switchView,
  } = useStore();

  const currentDeck =
    currentView === DeckType.Player ? playerDeck : monsterDeck;

  const handleDrawCard = (cardType: CardTypeName) => {
    drawCard(currentView, cardType);
  };

  const handleReturnCard = (cardIndex: number) => {
    returnCard(currentView, cardIndex);
  };

  const handleResetDeck = () => {
    resetDeck(currentView);
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gloomhaven Modifier Card Tracker
            </h1>
            <p className="text-lg text-gray-600">
              Set up your player and monster decks to start tracking percentages
            </p>
          </div>
          <DeckSetup onSetupComplete={initializeDecks} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        currentView={currentView}
        onSwitchView={switchView}
        onResetAll={resetAll}
      />

      <main className="flex-1 container py-6">
        <div className="grid grid-1 gap-6">
          <DeckView
            deck={currentDeck}
            onDrawCard={handleDrawCard}
            onReturnCard={handleReturnCard}
            onResetDeck={handleResetDeck}
          />

          {currentDeck.drawn.length > 0 && (
            <DrawnPile
              drawnCards={currentDeck.drawn}
              onReturnCard={handleReturnCard}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
