import { useState, useEffect } from 'react';
import getRandomFact from '../services/getRandomFact';

const useCatFact = () => {
  const [catFact, setCatFact] = useState('');

  const getFact = () => {
    getRandomFact().then(data => {
      setCatFact(decodeURI(data.fact));
    });
  };

  useEffect(() => {
    getFact();
  }, []);

  return { catFact, getFact };
};

export default useCatFact;
