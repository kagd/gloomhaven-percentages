import { CardType, CardTypeName } from './types';

// SVG icons for each card type (simplified geometric representations)
const createIcon = (path: string) => `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    ${path}
  </svg>
`)}`;

export const cardTypeDefinitions: Record<CardTypeName, CardType> = {
  [CardTypeName.PlusZero]: {
    name: CardTypeName.PlusZero,
    icon: createIcon('<text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">+0</text>'),
    color: '#6B7280', // gray
  },
  [CardTypeName.PlusOne]: {
    name: CardTypeName.PlusOne,
    icon: createIcon('<text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">+1</text>'),
    color: '#10B981', // emerald
  },
  [CardTypeName.PlusTwo]: {
    name: CardTypeName.PlusTwo,
    icon: createIcon('<text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">+2</text>'),
    color: '#059669', // emerald-600
  },
  [CardTypeName.MinusOne]: {
    name: CardTypeName.MinusOne,
    icon: createIcon('<text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">-1</text>'),
    color: '#DC2626', // red-600
  },
  [CardTypeName.MinusTwo]: {
    name: CardTypeName.MinusTwo,
    icon: createIcon('<text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">-2</text>'),
    color: '#B91C1C', // red-700
  },
  [CardTypeName.Double]: {
    name: CardTypeName.Double,
    icon: createIcon('<text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">2×</text>'),
    color: '#F59E0B', // amber-500
  },
  [CardTypeName.Miss]: {
    name: CardTypeName.Miss,
    icon: createIcon('<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 9l-6 6"/><path d="M9 9l6 6"/>'),
    color: '#EF4444', // red-500
  },
  [CardTypeName.Curse]: {
    name: CardTypeName.Curse,
    icon: createIcon('<path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="currentColor"/>'),
    color: '#7C3AED', // violet-600
  },
  [CardTypeName.Stun]: {
    name: CardTypeName.Stun,
    icon: createIcon('<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>'),
    color: '#FBBF24', // amber-400
  },
  [CardTypeName.Bless]: {
    name: CardTypeName.Bless,
    icon: createIcon('<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>'),
    color: '#34D399', // emerald-400
  },
  [CardTypeName.Wound]: {
    name: CardTypeName.Wound,
    icon: createIcon('<circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M8 12h8" stroke="white" stroke-width="2"/>'),
    color: '#DC2626', // red-600
  },
  [CardTypeName.Poison]: {
    name: CardTypeName.Poison,
    icon: createIcon('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>'),
    color: '#059669', // emerald-600
  },
  [CardTypeName.Immobilize]: {
    name: CardTypeName.Immobilize,
    icon: createIcon('<rect x="4" y="10" width="16" height="4" rx="2" fill="currentColor"/>'),
    color: '#6B7280', // gray-500
  },
  [CardTypeName.Disarm]: {
    name: CardTypeName.Disarm,
    icon: createIcon('<path d="M20.94 11L18.5 8.56l-1.94 1.94-5-5L13.5 3.56 11 1.06 9.94 2.12l2.44 2.44-5 5L5.44 7.62 3 10.06 4.06 11.12l2.44-2.44 5 5L9.56 15.62 12 18.06 13.06 17l-2.44-2.44 5-5 1.94 1.94 2.44-2.44z" fill="currentColor"/>'),
    color: '#8B5CF6', // violet-500
  },
  [CardTypeName.Muddle]: {
    name: CardTypeName.Muddle,
    icon: createIcon('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zM17.9 17.39c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>'),
    color: '#A855F7', // purple-500
  },
  [CardTypeName.Push]: {
    name: CardTypeName.Push,
    icon: createIcon('<path d="M9 4l-2 2 4 4H2v2h9l-4 4 2 2 7-7L9 4z" fill="currentColor"/>'),
    color: '#3B82F6', // blue-500
  },
  [CardTypeName.Pull]: {
    name: CardTypeName.Pull,
    icon: createIcon('<path d="M15 4l2 2-4 4h9v2h-9l4 4-2 2-7-7 7-7z" fill="currentColor"/>'),
    color: '#06B6D4', // cyan-500
  },
  [CardTypeName.AddTarget]: {
    name: CardTypeName.AddTarget,
    icon: createIcon('<circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 1v6m0 8v6m11-7h-6M6 12H0" stroke="currentColor" stroke-width="2"/>'),
    color: '#F97316', // orange-500
  },
  [CardTypeName.Heal]: {
    name: CardTypeName.Heal,
    icon: createIcon('<path d="M12 2v8m0 4v8m-6-6h12" stroke="currentColor" stroke-width="3" fill="none"/>'),
    color: '#10B981', // emerald-500
  },
  [CardTypeName.Shield]: {
    name: CardTypeName.Shield,
    icon: createIcon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor"/>'),
    color: '#6366F1', // indigo-500
  },
  [CardTypeName.Fire]: {
    name: CardTypeName.Fire,
    icon: createIcon('<path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04.01 2.65-2.15 4.8-4.8 4.8z" fill="currentColor"/>'),
    color: '#EF4444', // red-500
  },
  [CardTypeName.Ice]: {
    name: CardTypeName.Ice,
    icon: createIcon('<path d="M12 2l3.5 6.06L22 9.27l-4.19 4.04.99 5.69L12 16.18 5.2 19l.99-5.69L2 9.27l6.5-1.21L12 2z" fill="currentColor"/>'),
    color: '#06B6D4', // cyan-500
  },
  [CardTypeName.Air]: {
    name: CardTypeName.Air,
    icon: createIcon('<path d="M14.5 9c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5zm-5 0C8.67 9 8 8.33 8 7.5 8 6.67 8.67 6 9.5 6c.83 0 1.5.67 1.5 1.5C11 8.33 10.33 9 9.5 9zm2.5 3c-1.38 0-2.5-1.12-2.5-2.5S10.62 7 12 7s2.5 1.12 2.5 2.5S13.38 12 12 12zm-5 3.5c0-.83.67-1.5 1.5-1.5.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5-.83 0-1.5-.67-1.5-1.5zm7 0c0-.83.67-1.5 1.5-1.5.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5-.83 0-1.5-.67-1.5-1.5z" fill="currentColor"/>'),
    color: '#F3F4F6', // gray-100
  },
  [CardTypeName.Earth]: {
    name: CardTypeName.Earth,
    icon: createIcon('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>'),
    color: '#A3A3A3', // gray-400
  },
  [CardTypeName.Light]: {
    name: CardTypeName.Light,
    icon: createIcon('<path d="M9 2v6h6V2H9zm6.5 6a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h7z" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="white"/>'),
    color: '#FBBF24', // amber-400
  },
  [CardTypeName.Dark]: {
    name: CardTypeName.Dark,
    icon: createIcon('<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/>'),
    color: '#374151', // gray-700
  },
};

// Helper function to get card type definition
export function getCardType(name: CardTypeName): CardType {
  return cardTypeDefinitions[name];
}

// Get all available card types
export function getAllCardTypes(): CardType[] {
  return Object.values(cardTypeDefinitions);
}

// Get card types by category (for setup UI)
export const cardTypeCategories = {
  basic: [
    CardTypeName.PlusZero,
    CardTypeName.PlusOne,
    CardTypeName.PlusTwo,
    CardTypeName.MinusOne,
    CardTypeName.MinusTwo,
    CardTypeName.Double,
    CardTypeName.Miss,
  ],
  conditions: [
    CardTypeName.Curse,
    CardTypeName.Bless,
    CardTypeName.Stun,
    CardTypeName.Wound,
    CardTypeName.Poison,
    CardTypeName.Immobilize,
    CardTypeName.Disarm,
    CardTypeName.Muddle,
  ],
  effects: [
    CardTypeName.Push,
    CardTypeName.Pull,
    CardTypeName.AddTarget,
    CardTypeName.Heal,
    CardTypeName.Shield,
  ],
  elements: [
    CardTypeName.Fire,
    CardTypeName.Ice,
    CardTypeName.Air,
    CardTypeName.Earth,
    CardTypeName.Light,
    CardTypeName.Dark,
  ],
};