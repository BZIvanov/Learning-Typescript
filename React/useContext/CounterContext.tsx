// type ReactNode is to specify, that ReactNode is only used as a type and it should be completely excluded from the compiled javascript files
import { type ReactNode, createContext, useState } from "react";

type CounterState = {
  count: number;
};

type CounterContextValue = CounterState & {
  increment: () => void;
  decrement: () => void;
  incrementByValue: (value: number) => void;
};

export const CounterContext = createContext<CounterContextValue | null>(null);

type CounterContextProviderProps = {
  children: ReactNode;
};

export default function CounterContextProvider({
  children,
}: CounterContextProviderProps) {
  const [count, setCount] = useState<number>(1);

  const contextValue: CounterContextValue = {
    count,
    increment: () => {
      setCount((prevState) => prevState + 1);
    },
    decrement: () => {
      setCount((prevState) => prevState - 1);
    },
    incrementByValue: (value) => {
      setCount(value);
    },
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
}
