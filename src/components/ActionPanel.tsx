import React from 'react';
import styles from './ActionPanel.module.css';

export interface ActionPanelProps {
  hasAnyCards: boolean;
  canSubmit: boolean;
  monsterCardCount: number;
  onSubmit: () => void;
}

const ActionPanel: React.FC<ActionPanelProps> = ({
  hasAnyCards,
  canSubmit,
  monsterCardCount,
  onSubmit,
}) => {
  return (
    <>
      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!canSubmit}
          className="button-primary flex-1 text-lg py-4"
        >
          Begin the Hunt
        </button>
      </div>

      {!hasAnyCards && (
        <p className={styles.noCardsMessage}>
          Choose your weapons... Add cards to at least one deck to begin
        </p>
      )}

      {hasAnyCards && monsterCardCount < 20 && (
        <p className={styles.noCardsMessage}>
          Monster deck needs at least 20 cards (currently has {monsterCardCount}
          )
        </p>
      )}
    </>
  );
};

export default ActionPanel;
