import React from 'react';
import { useState } from 'react';
import { Header } from '../../../header';

export const UseStatePage = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Taylor');
    // const [todos, setTodos] = useState(() => createTodos());

    function handleClick() {
        setCount(count + 1);
    }

    function handleClickName(name) {
        setName(name);
    }

    return (
        <div className='home-container'>
            <Header />
            <h1>Use State</h1>
            <p>
                Test
            </p>
            <button onClick={handleClick}>
                You pressed me {count} times
            </button>
            <button onClick={handleClickName}>
                you said my
            </button>
            <input></input>
        </div>
    );
};
