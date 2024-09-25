import React from 'react';
import { Header } from '../../../header';
import { Login } from './Login';

var isLoggedIn = false;

export const ConditionalTernaryOperatorPage = () => {

  return (
    <div>
      <Header />
      <div className="container">
        {isLoggedIn ? <h1>Hello</h1> : <Login />}
      </div>
    </div>
  );
};
