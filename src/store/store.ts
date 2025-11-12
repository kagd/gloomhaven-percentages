import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, StateActions, DeckType, CardTypeName, Deck } from '../models/types';
import { getInitialPlayerDeck, getInitialMonsterDeck } from '../models/cardTypes';

interface Store extends AppState, StateActions {}

const getDefaultPlayerCards = (): Record<CardTypeName, number> => {
  const initialCards = getInitialPlayerDeck();
  return initialCards as Record<CardTypeName, number>;
};

const getDefaultMonsterCards = (): Record<CardTypeName, number> => {
  const initialCards = getInitialMonsterDeck();
  return initialCards as Record<CardTypeName, number>;
};

const createInitialDeck = (type: DeckType): Deck => {
  const cards = type === DeckType.Player ? getDefaultPlayerCards() : getDefaultMonsterCards();
  return {
    type,
    cards: { ...cards },
    drawn: [],
    initialCards: { ...cards },
  };
};

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      // Initial state - start with default decks but not initialized (still show setup)
      playerDeck: createInitialDeck(DeckType.Player),
      monsterDeck: createInitialDeck(DeckType.Monster),
      currentView: DeckType.Player,
      isInitialized: false,

      // Actions
      initializeDecks: (playerCards, monsterCards) => {
        set({
          playerDeck: {
            type: DeckType.Player,
            cards: { ...playerCards },
            drawn: [],
            initialCards: { ...playerCards },
          },
          monsterDeck: {
            type: DeckType.Monster,
            cards: { ...monsterCards },
            drawn: [],
            initialCards: { ...monsterCards },
          },
          isInitialized: true,
        });
      },

      drawCard: (deckType, cardType) => {
        const currentState = get();
        const deck = deckType === DeckType.Player ? currentState.playerDeck : currentState.monsterDeck;
        
        // Check if card is available to draw
        if (deck.cards[cardType] > 0) {
          const updatedDeck = {
            ...deck,
            cards: {
              ...deck.cards,
              [cardType]: deck.cards[cardType] - 1,
            },
            drawn: [...deck.drawn, cardType],
          };

          if (deckType === DeckType.Player) {
            set({ playerDeck: updatedDeck });
          } else {
            set({ monsterDeck: updatedDeck });
          }
        }
      },

      returnCard: (deckType, cardIndex) => {
        const currentState = get();
        const deck = deckType === DeckType.Player ? currentState.playerDeck : currentState.monsterDeck;
        
        if (cardIndex >= 0 && cardIndex < deck.drawn.length) {
          const cardToReturn = deck.drawn[cardIndex];
          const newDrawn = [...deck.drawn];
          newDrawn.splice(cardIndex, 1);

          const updatedDeck = {
            ...deck,
            cards: {
              ...deck.cards,
              [cardToReturn]: deck.cards[cardToReturn] + 1,
            },
            drawn: newDrawn,
          };

          if (deckType === DeckType.Player) {
            set({ playerDeck: updatedDeck });
          } else {
            set({ monsterDeck: updatedDeck });
          }
        }
      },

      resetDeck: (deckType) => {
        const currentState = get();
        const deck = deckType === DeckType.Player ? currentState.playerDeck : currentState.monsterDeck;
        
        const resetDeck = {
          ...deck,
          cards: { ...deck.initialCards },
          drawn: [],
        };

        if (deckType === DeckType.Player) {
          set({ playerDeck: resetDeck });
        } else {
          set({ monsterDeck: resetDeck });
        }
      },

      resetAll: () => {
        set({
          playerDeck: createInitialDeck(DeckType.Player),
          monsterDeck: createInitialDeck(DeckType.Monster),
          currentView: DeckType.Player,
          isInitialized: false, // Go back to setup screen
        });
      },

      switchView: (view) => {
        set({ currentView: view });
      },

      getDefaultPlayerCards: () => {
        return getDefaultPlayerCards();
      },

      getDefaultMonsterCards: () => {
        return getDefaultMonsterCards();
      },
    }),
    {
      name: 'gloomhaven-percentages-storage',
      // Only persist the state, not the actions
      partialize: (state) => ({
        playerDeck: state.playerDeck,
        monsterDeck: state.monsterDeck,
        currentView: state.currentView,
        isInitialized: state.isInitialized,
      }),
    }
  )
);

export default useStore;