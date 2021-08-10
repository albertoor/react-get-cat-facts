import React, { useState } from 'react';
import useCatFact from '../hooks/useCatFact';
import './Fact.css';

const Fact = () => {
  const catFact = useCatFact();

  return (
    <div className="fact-container">
      <h2>😽 {catFact.catFact} 🐈</h2>
      <button onClick={catFact.getFact}>Get other fact</button>
    </div>
  );
};

export default Fact;
