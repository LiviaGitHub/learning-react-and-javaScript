import React, { useState } from 'react';
import './index.css';
import { Header } from '../../../header';

export const ButtonPage = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked(true); // update the state
  };

  return (
    <div> 
        <Header />
        <button 
            type="submit" 
            onClick={handleClick}
            style={{ textDecoration: isClicked ? 'line-through' : 'none' }} // apply style
        >
            {props.isRegistred ? 'Registrar' : 'Login'} 
        </button>
    </div>
  );
};
