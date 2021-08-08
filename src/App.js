import React from 'react';
import useCatFact from './hooks/useCatFact';

const App = () => {
  const catFact = useCatFact();

  return (
    <div>
      <h1>Get Random Cat Fact!</h1>
      <h2>{catFact}</h2>
    </div>
  );
};

export default App;
