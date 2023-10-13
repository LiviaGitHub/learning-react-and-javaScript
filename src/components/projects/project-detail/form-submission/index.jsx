import React, { useState } from 'react';
import { Header } from '../../../header';

export const FormSubmissionPage = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const inputHandler = (event, identifier) => {
    const value = event.target.value;
    if (identifier === 'name') {
      setEnteredName(value);
      setEnteredNameIsValid(value.trim() !== '');
    } else if (identifier === 'email') {
      setEnteredEmail(value);
      setEnteredEmailIsValid(value.trim() !== '');
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      setEnteredEmailIsValid(false);
    } else {
      setEnteredNameIsValid(true);
      setEnteredName('');

      setEnteredEmailIsValid(true);
      setEnteredEmail('');
    }
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const emailInputClasses = enteredEmailIsValid ? 'form-control' : 'form-control invalid';
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  return (
    <div>
      <Header />
      <h1>Form submission and getting User input values</h1>
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            onChange={(event) => inputHandler(event, 'name')}
            onBlur={() => setEnteredNameTouched(true)}
            value={enteredName}
          />
          {nameInputIsInvalid && <p>Name must not be empty.</p>}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='email'>E-mail</label>
          <input
            type='text'
            id='email'
            onChange={(event) => inputHandler(event, 'email')}
            onBlur={() => setEnteredEmailTouched(true)}
            value={enteredEmail}
          />
          {emailInputIsInvalid && <p>Email must not be empty.</p>}
        </div>
        <br />
        <button disabled={!enteredNameIsValid || !enteredEmailIsValid}>Submit</button>
      </form>
    </div>
  );
};
