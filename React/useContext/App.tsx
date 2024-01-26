import CounterContextProvider from './CounterContext';
import Counter from './Counter';

const App = () => {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
  );
};

export default App;
