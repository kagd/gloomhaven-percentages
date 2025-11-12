import React from 'react';
import styles from './ActionPanel.module.css';

export interface ActionPanelProps {
  hasAnyCards: boolean;
  onSubmit: () => void;
}

const ActionPanel: React.FC<ActionPanelProps> = ({ hasAnyCards, onSubmit }) => {
  return (
    <>
      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!hasAnyCards}
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
    </>
  );
};

export default ActionPanel;
