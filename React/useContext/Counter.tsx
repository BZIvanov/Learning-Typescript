import { useCounterContext } from './useCounterContext';

function Counter() {
  const { count, increment, decrement } = useCounterContext();

  return (
    <div>
      <p>Current count value: {count}</p>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
}

export default Counter;
