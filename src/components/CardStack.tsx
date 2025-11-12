import React from 'react';
import { CardStackProps } from '../models/types';
import styles from './CardStack.module.css';

const CardStack: React.FC<CardStackProps> = ({
  cardType,
  count,
  percentage,
  onDraw,
  icon,
  color,
}) => {
  const isDisabled = count === 0;
  const neutralColor = '#a68b5b'; // Consistent neutral color for non-icon elements

  return (
    <button
      type="button"
      onClick={onDraw}
      disabled={isDisabled}
      className={`card ${styles.cardStack} ${
        isDisabled ? styles.disabled : ''
      }`}
      style={{ borderColor: neutralColor }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardInfo}>
          <div className={styles.cardIcon} style={{ backgroundColor: color }}>
            <img src={icon} alt={cardType} />
          </div>
          <div>
            <h3 className={styles.cardTitle}>{cardType}</h3>
            <p className={styles.cardCount}>{count} remaining</p>
          </div>
        </div>

        <div className={styles.percentageSection}>
          <div
            className={styles.percentageValue}
            style={{ color: neutralColor }}
          >
            {percentage}%
          </div>
          <div className={styles.percentageLabel}>chance</div>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: `${percentage}%`,
            backgroundColor: neutralColor,
          }}
        />
      </div>
    </button>
  );
};

export default CardStack;
