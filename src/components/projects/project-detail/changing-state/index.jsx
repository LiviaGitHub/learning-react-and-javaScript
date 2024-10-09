import React, { useState } from 'react';
import './index.css';
import { Header } from '../../../header';

export const ChangingStatetPage = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    userEmail: '',
  });

  function handleChange(event) {
    // event.target does not have a property called contact.
    const { name, value } = event.target;

    setContact((prevValue) => {
        // The 'fName' is in quotes because it is the name of the property you are comparing, 
        // and that name is a string literal. In JavaScript, 
        // string literals need to be in quotes to differentiate them from variables or identifiers. 
        // If you removed the quotes, 
        // fName would be treated as a variable (which in this case doesn't exist) rather than a string.
      if (name === 'firstName') {
        return {
          firstName: value,
          lastName: prevValue.lastName,
          userEmail: prevValue.userEmail
        };
      } else if (name === 'lastName') {
        return {
          firstName: prevValue.firstName,
          lastName: value,
          userEmail: prevValue.userEmail
        };
      } else if (name === 'userEmail') {
        return {
          firstName: prevValue.firstName,
          lastName: prevValue.lastName,
          userEmail: value
        };
      }
    });
  }

  return (
    <div>
      <Header />
      <form className="form-container">
        <h1 className="form-h1">
          Hello {contact.firstName} {contact.lastName}
        </h1>
        <p className='p'>{contact.userEmail}</p>
        <input
          onChange={handleChange}
          type="text"
          name="firstName" // add attribute name
          placeholder="First name"
          value={contact.firstName}
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastName" // add attribute name
          placeholder="Last name"
          value={contact.lastName}
        />
        <input
          onChange={handleChange}
          type="text"
          name="userEmail" // add attribute name
          placeholder="Email"
          value={contact.userEmail}
        />
        <button type="Submit">Send</button>
      </form>
    </div>
  );
};
