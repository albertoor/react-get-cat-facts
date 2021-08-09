const getData = apiResponse => {
  const data = apiResponse;
  return data;
};

const getRandomFact = () => {
  return fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(getData);
};

export default getRandomFact;
