import React from 'react';
import { CardStackProps } from '../models/types';

const CardStack: React.FC<CardStackProps> = ({
  cardType,
  count,
  percentage,
  onDraw,
  icon,
  color,
}) => {
  const isDisabled = count === 0;

  return (
    <button
      type="button"
      onClick={onDraw}
      disabled={isDisabled}
      className={`card p-4 text-left transition-all duration-200 hover:shadow-md ${
        isDisabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer hover:scale-105'
      }`}
      style={{ borderColor: color }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: color, color: 'white' }}
          >
            <img src={icon} alt={cardType} className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{cardType}</h3>
            <p className="text-sm text-gray-600">{count} remaining</p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold" style={{ color }}>
            {percentage}%
          </div>
          <div className="text-xs text-gray-500">chance</div>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>

      {!isDisabled && (
        <div className="mt-3 text-center">
          <span className="text-sm text-gray-600">Click to draw</span>
        </div>
      )}
    </button>
  );
};

export default CardStack;
