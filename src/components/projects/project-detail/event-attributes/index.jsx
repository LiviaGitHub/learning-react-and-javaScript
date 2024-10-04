import React, { useState } from 'react';
import './index.css';
import { Header } from '../../../header';

export const EventAttributesPage = () => {
  const [name, setName] = useState('');
  const [text, setTextSubmitted] = useState('Hello');
  const [isMouseOver, setMouseOver] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    console.log('Send name:', name);
    setTextSubmitted('Submitted');
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };


  return (
    <div>
      <Header />
      <div className="event-container">
        <h1 className="event-h1">
          {text}
        </h1>
        <input
          type="text"
          placeholder="What is your name?"
          value={name}
          onChange={handleName}
        />
        <button
            style={{backgroundColor: isMouseOver ? 'black' : '#50a3a2'}}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            Submit
        </button>
      </div>
    </div>
  );
};
