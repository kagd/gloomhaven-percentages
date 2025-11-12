import React from 'react';
import { CardTypeName } from '../models/types';
import CardInput from './CardInput';
import styles from './CardCategory.module.css';

export interface CardCategoryProps {
  title: string;
  cardTypes: CardTypeName[];
  cardCounts: Record<CardTypeName, number>;
  onCardCountChange: (cardType: CardTypeName, count: number) => void;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  title,
  cardTypes,
  cardCounts,
  onCardCountChange,
}) => {
  return (
    <div className={styles.cardCategory}>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.categoryCards}>
        {cardTypes.map((cardType) => (
          <CardInput
            key={cardType}
            cardType={cardType}
            count={cardCounts[cardType] || 0}
            onCountChange={onCardCountChange}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCategory;
