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

  const handleIncrement = () => {
    onCountChange(cardType, count + 1);
  };

  const handleDecrement = () => {
    onCountChange(cardType, count - 1);
  };

  return (
    <div className={styles.gloomCard}>
      <div className={styles.gloomCardHeader}>
        <span className={styles.gloomCardName}>{cardDef.name}</span>
        <span className={styles.gloomCardCount}>{count}</span>
      </div>

      <div className={styles.gloomCardBody}>
        <button
          type="button"
          onClick={handleDecrement}
          className={styles.gloomCardButton}
          disabled={count === 0}
        >
          −
        </button>

        <button
          type="button"
          onClick={handleIncrement}
          className={styles.gloomCardButton}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CardInput;
