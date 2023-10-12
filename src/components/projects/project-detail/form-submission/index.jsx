import React, { useState } from 'react';
import { Header } from '../../../header';

export const FormSubmissionPage = () => {

  const[enteredName, setEnteredName] = useState('');

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
  };

  return (
    <div className='home-container'>
      <Header />
      <h1>Form submission and getting User imput values</h1>
      <form onSubmit={formSubmissionHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' onChange={nameInputHandler} />
          <button> Submit </button>
        </div>
      </form>
    </div>
  );
};

