import React from 'react';
import { Header } from '../../../header';

export const DestructuringObjectsPage = () => {

  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };

  const { firstName, lastName } = person;

  const { firstName: fName, lastName: lName } = person;

  const { one, ...rest } = person;

  return (
    <div className='home-container'>
      <Header />
      <h1>Destructuring Objects</h1>

      <p>{firstName}</p>
      <p>{lastName}</p>

      <p>{JSON.stringify(one)}</p>
      <p>{JSON.stringify(rest)}</p>

      <p>{fName}</p>
      <p>{lName}</p>

    </div>
  );
};

