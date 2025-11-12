import React from 'react';
import { CardTypeName } from '../models/types';
import { getCardType } from '../models/cardTypes';
import styles from './CardInput.module.css';

export interface CardInputProps {
  cardType: CardTypeName;
  count: number;
  onCountChange: (cardType: CardTypeName, count: number) => void;
}

const CardInput: React.FC<CardInputProps> = ({
  cardType,
  count,
  onCountChange,
}) => {
  const cardDef = getCardType(cardType);
  const neutralColor = '#a68b5b'; // Consistent neutral color for non-icon elements

  const handleIncrement = () => {
    onCountChange(cardType, count + 1);
  };

  const handleDecrement = () => {
    onCountChange(cardType, count - 1);
  };

  return (
    <div className={styles.cardInput} style={{ borderColor: neutralColor }}>
      <div className={styles.cardHeader}>
        <div className={styles.cardInfo}>
          <div
            className={styles.cardIcon}
            style={{ backgroundColor: cardDef.color }}
          >
            <img src={cardDef.icon} alt={cardDef.name} />
          </div>
          <div>
            <h3 className={styles.cardTitle}>{cardDef.name}</h3>
          </div>
        </div>
        <div className={styles.cardCount}>{count} cards</div>
      </div>

      <div className={styles.cardBody}>
        <button
          type="button"
          onClick={handleDecrement}
          className={styles.cardButton}
          disabled={count === 0}
        >
          −
        </button>

        <button
          type="button"
          onClick={handleIncrement}
          className={styles.cardButton}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CardInput;
