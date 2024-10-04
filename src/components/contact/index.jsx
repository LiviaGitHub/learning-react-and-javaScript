import React from 'react';
import './index.css';
import { Header } from '../header';
import { Form } from './Form';

export const ContactPage = () => {

  var userIsRegistred = false;

  return (
    <div>
      <Header />
      <div className='contact-container'>
        <h1 className='contact-h1'>Contact</h1>
        {/* <h1>Contact</h1> */}
        <Form 
          userIsRegistred = {userIsRegistred}
        />
      </div>
    </div>
  );
};
