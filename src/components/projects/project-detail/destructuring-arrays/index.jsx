import React from 'react';
import { Header } from '../../../header';

export const DestructuringArraysPage = () => {
  const numbers = [1, 2, 3, 4, 5];

  const [first, second, third] = numbers;

  const [a, , c] = numbers;

  const [one, ...rest] = numbers;

  return (
    <div className='home-container'>
      <Header />
      <h1>Destructuring Arrays</h1>
      <p>{first}</p>
      <p>{second}</p>
      <p>{third}</p>

      <p>{a}</p>
      <p>{c}</p>

      <p>{one}</p>
      <p>{rest}</p>
    </div>
  );
};
