import React from 'react';
import './button.css';

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className='button'
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};
