import React from 'react';
import { NavigationProps, DeckType } from '../models/types';
import styles from './Navigation.module.css';

const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onSwitchView,
  onResetAll,
}) => {
  return (
    <nav className={styles.navigation}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.viewSwitcher}>
          <button
            type="button"
            onClick={() => onSwitchView(DeckType.Player)}
            className={`${styles.viewButton} ${
              currentView === DeckType.Player ? styles.active : styles.inactive
            }`}
          >
            Player Deck
          </button>
          <button
            type="button"
            onClick={() => onSwitchView(DeckType.Monster)}
            className={`${styles.viewButton} ${
              currentView === DeckType.Monster ? styles.active : styles.inactive
            }`}
          >
            Monster Deck
          </button>

          <button
            type="button"
            onClick={onResetAll}
            className={`${styles.viewButton} ${styles.resetAll}`}
            title="Return to the beginning..."
          ></button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
