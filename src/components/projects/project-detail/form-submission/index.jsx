import React, { useEffect, useState } from 'react';
import { Header } from '../../../header';

export const FormSubmissionPage = () => {

  const[enteredName, setEnteredName] = useState('');
  const[enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const[enteredNameTouched, setEnteredNameTouched] = useState(false);

  let formIsValid = false;

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    
    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
    }

    setEnteredNameIsValid(true);

    setEnteredName('');
  };

  if(enteredNameIsValid){
    formIsValid(true);
  }
  //   } else{ 
  //     setFormIsValid(false);
  //     console.log('Name input is invalid');
  //   }
  //   // dependencies array
  // }, [enteredNameIsValid]);

  const nameImputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameImputClasses = enteredNameIsValid ? 'form-control invalid' : 'form-control';

  return (
    <div>
      <Header />
      <h1>Form submission and getting User imput values</h1>
      <form onSubmit={formSubmissionHandler}>
        <div className={nameImputClasses}>
          <label htmlFor='name'>Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={nameInputHandler}  
            onBlur={() => setEnteredNameTouched(true)}
            value={enteredName}/>
            {nameImputIsInvalid && <p> Name must not be empty. </p>}
          <button disabled={!formIsValid}> Submit </button>
        </div>
      </form>
    </div>
  );
};

