import React from 'react';
import './index.css';
import { Header } from '../header';
import { Form } from './Form';

export const ContactPage = () => {

  return (
    <div>
      <Header />
      <div className='container'>
        <h1>Contact</h1>
        {/* <h1>Contact</h1> */}
        <Form />
      </div>
    </div>
  );
};
