import React from 'react';
import './index.css';

export const Input = (props) => {
  return (
        <input type={props.type} placeholder={props.placeholder} />
  );
};
