import React from 'react';

export const Form = () => {
  return (
    <form className="form"> 
      <input type="text" placeholder="Message" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Confirm Email" />
      <button type="submit">Register</button>
    </form>
  );
}
