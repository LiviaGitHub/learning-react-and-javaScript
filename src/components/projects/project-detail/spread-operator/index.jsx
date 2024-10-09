import React, { useState } from 'react';
import { Header } from '../../../header';
import './index.css';

export const SpreadOperatorPage = () => {

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText(
      ''  
    );
  }

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setContact(prevValue => {
//       return {
//         ...prevValue,
//         [name]: value
//       };
//     });
//   }


  return (
    <>
    <Header />
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
      </div>
    </div>
    </>
  );
}
