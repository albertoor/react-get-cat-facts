import { useState, useEffect } from 'react';

const useCatFact = () => {
  const [catFact, setCatFact] = useState('');

  const getRandomFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(result => setCatFact(decodeURI(result.fact)));
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  return catFact;
};

export default useCatFact;
