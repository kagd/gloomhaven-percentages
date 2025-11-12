import React from 'react';
import { DrawnPileProps, CardTypeName } from '../models/types';
import { getCardType } from '../models/cardTypes';
import styles from './DrawnPile.module.css';

const DrawnPile: React.FC<DrawnPileProps> = ({ drawnCards, onReturnCard }) => {
  if (drawnCards.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <h3 className={styles.drawnPileTitle}>
        Drawn Cards ({drawnCards.length})
      </h3>

      <div className={styles.drawnCardsList}>
        {drawnCards.map((cardType, index) => {
          const cardDef = getCardType(cardType as CardTypeName);

          return (
            <button
              key={`${cardType}-${index}`}
              type="button"
              onClick={() => onReturnCard(index)}
              className={styles.drawnCardButton}
            >
              <div className={styles.cardInfo}>
                <div
                  className={styles.cardIconContainer}
                  style={{ backgroundColor: cardDef.color }}
                >
                  <img src={cardDef.icon} alt={cardDef.name} />
                </div>
                <span className={styles.cardName}>{cardDef.name}</span>
              </div>

              <div className={styles.returnInstruction}>Click to return</div>
            </button>
          );
        })}
      </div>

      <div className={styles.footerNote}>
        Click any card to return it to the deck
      </div>
    </div>
  );
};

export default DrawnPile;
