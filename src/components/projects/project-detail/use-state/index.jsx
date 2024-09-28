import React from 'react';
import { useState } from 'react';
import { Header } from '../../../header';

export const UseStatePage = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Taylor');
    const [inputValue, setInputValue] = useState(''); // State to get the new name

    function handleClick() {
        setCount(count + 1);
    }

    function handleClickName() {
        setName(inputValue);
    }

    return (
        <div className='home-container'>
            <Header />
            <h1>Use State</h1>
            <button onClick={handleClick}>
                You pressed me {count} times
            </button>
            <button onClick={handleClickName}>
                you said my {name} 
            </button>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} // Updates state when the user types
                placeholder="Enter new name"
            />
        </div>
    );
};
