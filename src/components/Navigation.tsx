import React from 'react';
import { NavigationProps, DeckType } from '../models/types';

const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onSwitchView,
  onResetAll,
}) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-gray-900">
              Gloomhaven Tracker
            </h1>

            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                type="button"
                onClick={() => onSwitchView(DeckType.Player)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentView === DeckType.Player
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Player Deck
              </button>
              <button
                type="button"
                onClick={() => onSwitchView(DeckType.Monster)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentView === DeckType.Monster
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monster Deck
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onResetAll}
              className="button-danger text-sm"
              title="Reset everything and return to setup"
            >
              Reset All
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
