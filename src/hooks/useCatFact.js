import { useState, useEffect } from 'react';
import getRandomFact from '../services/getRandomFact';

const useCatFact = () => {
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    getRandomFact().then(data => {
      setCatFact(data.fact);
    });
  }, []);

  return catFact;
};

export default useCatFact;
