import React from 'react';
import useCatFact from '../hooks/useCatFact';

const Fact = () => {
  const catFact = useCatFact();

  return (
    <>
      <h2>{catFact}</h2>
    </>
  );
};

export default Fact;
