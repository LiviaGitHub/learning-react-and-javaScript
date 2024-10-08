import React, { useState } from 'react';
import './index.css';
import { Header } from '../../../header';

export const FormEventPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [headingText, setHeadingText] = useState('Livia');

  function handleChangeFirstName(event) {
    setName(event.target.value);
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value);
  }

  // function handleChange(event) {
  //     setName(event.target.value)
  // }

  // function handleClick() {
  //     setHeadingText(name)

  //     event.preventDefault();
  // }

  return (
    <div>
      <Header />
      <form className="form-container">
        <h1 className="form-h1">
          Hello {name} {lastName}
        </h1>
        <input
          onChange={handleChangeFirstName}
          type="text"
          placeholder="First name"
          value={name}
        />
        <input
          onChange={handleChangeLastName}
          // onChange={handleChange}
          type="text"
          placeholder="Last name"
          value={lastName}
        />
        <button
          type="Submit"
          // onClick={handleClick}
        >
          Send
        </button>
      </form>
    </div>
  );
};

// https://legacy.reactjs.org/docs/forms.html#controlled-components
// event is the change event.
// event.target is the <input> element (or another element that triggered the event).
// event.target.value is the value entered by the user in the text field (in this example, "Carlos").
