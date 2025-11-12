import React from 'react';
import styles from './TabNavigation.module.css';

export interface TabNavigationProps {
  currentTab: 'player' | 'monster';
  onTabChange: (tab: 'player' | 'monster') => void;
  playerCardCount: number;
  monsterCardCount: number;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  currentTab,
  onTabChange,
  playerCardCount,
  monsterCardCount,
}) => {
  return (
    <div className={styles.tabNavigation}>
      <button
        type="button"
        onClick={() => onTabChange('player')}
        className={`${styles.tabButton} ${
          currentTab === 'player' ? styles.active : styles.inactive
        }`}
      >
        Player Deck ({playerCardCount} cards)
      </button>
      <button
        type="button"
        onClick={() => onTabChange('monster')}
        className={`${styles.tabButton} ${
          currentTab === 'monster' ? styles.active : styles.inactive
        }`}
      >
        Monster Deck ({monsterCardCount} cards)
      </button>
    </div>
  );
};

export default TabNavigation;
