import React from 'react';
import Fact from './components/Fact';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Get Random Cat Fact! 😺</h1>
      <img
        src="https://media.giphy.com/media/YRtLgsajXrz1FNJ6oy/giphy.gif"
        alt="cat-logo"
      />
      <Fact />
    </div>
  );
};

export default App;
