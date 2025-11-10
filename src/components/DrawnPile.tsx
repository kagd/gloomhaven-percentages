import React from 'react';
import { DrawnPileProps, CardTypeName } from '../models/types';
import { getCardType } from '../models/cardTypes';

const DrawnPile: React.FC<DrawnPileProps> = ({ drawnCards, onReturnCard }) => {
  if (drawnCards.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">
        Drawn Cards ({drawnCards.length})
      </h3>

      <div className="space-y-2">
        {drawnCards.map((cardType, index) => {
          const cardDef = getCardType(cardType as CardTypeName);

          return (
            <button
              key={`${cardType}-${index}`}
              type="button"
              onClick={() => onReturnCard(index)}
              className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded"
                  style={{ backgroundColor: cardDef.color, color: 'white' }}
                >
                  <img
                    src={cardDef.icon}
                    alt={cardDef.name}
                    className="w-5 h-5"
                  />
                </div>
                <span className="font-medium">{cardDef.name}</span>
              </div>

              <div className="text-sm text-gray-600">Click to return</div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 text-sm text-gray-500 text-center">
        Click any card to return it to the deck
      </div>
    </div>
  );
};

export default DrawnPile;
