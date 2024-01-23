import Alert from './Alert';

const App = () => {
  return (
    <div>
      <Alert type='success' infoText='It was success' />
      <Alert
        type='error'
        severity='low'
        infoText='It was error'
        debugInfo='Some error'
      />
    </div>
  );
};

export default App;
