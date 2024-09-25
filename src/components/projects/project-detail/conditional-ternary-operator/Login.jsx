import React from 'react';
import './index.css';
import { Input } from './imput';

export const Login = () => {
  return (
    <div>
        <h1>Hello</h1>
        <form className="form">
            <Input 
                type="text"
                placeholder="Username"
            />
                        <Input 
                type="password"
                placeholder="Password"
            />
          <button type="submit">Login</button>
        </form>
    </div>
  );
};
