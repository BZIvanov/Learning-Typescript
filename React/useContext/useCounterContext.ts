import { useContext } from 'react';

import { CounterContext } from './CounterContext';

export function useCounterContext() {
  const context = useContext(CounterContext);

  if (context === null) {
    throw new Error('CounterContext was used outside CounterProvider!');
  }

  return context;
}
