import React, { useState } from 'react';
import './index.css';
import { Header } from '../../../header';

export const UseStateHooksPage = () => {
  const [countIncrease, setIncreaseCount] = useState(0);
  const [countDecrease, setDecreaseCount] = useState(0);
  const [name, setName] = useState('Ariel');
  const [inputValue, setInputValue] = useState('Ariel');

  function handleIncreaseClick() {
    setIncreaseCount(countIncrease + 1);
  }

  function handleDecreaseClick() {
    setDecreaseCount(countDecrease - 1);
  }

  function handleChangeName() {
    setName(inputValue);
  }

  return (
    <div>
      <Header />

      <div className="container">
        <button className="increase-button" onClick={handleIncreaseClick} />
        You increase me {countIncrease} times
      </div>

      <div className="container">
        <button className="increase-button" onClick={handleDecreaseClick}>
          Decrease
        </button>
        {/* The <button> tag must be closed with </button> because in HTML, 
            most elements that can contain content (such as text, icons, or other HTML elements) 
            require a pair of opening and closing tags. 
            This pattern is followed by most block or inline elements that can contain other elements 
            or text. */}
        You increase me {countDecrease} times
      </div>

      <div className="container">
        <button className="increase-button" onClick={handleChangeName} />
        You changed my name to {name}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="New name"
        />
      </div>
    </div>
  );
};
