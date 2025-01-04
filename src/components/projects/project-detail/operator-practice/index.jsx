import React, { useState } from 'react';
import { Header } from '../../../header/index.jsx';
import './index.css';

export const OperatorPracticePage = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.trim() !== '') { // check if the text is not empty.
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText(''); // cleaning the input after add an item.
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleInputChange} type="text" value={inputText} />
          <button className="buttonadd" onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <li key={index}>{todoItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
