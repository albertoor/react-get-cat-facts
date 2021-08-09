import React from 'react';
import useCatFact from '../hooks/useCatFact';
import './Fact.css';

const Fact = () => {
  const catFact = useCatFact();

  return (
    <div className="fact-container">
      <h2>😽 {catFact} 🐈</h2>
    </div>
  );
};

export default Fact;
