import React from 'react';

export const Form = (props) => {

  return (
    <form className="form"> 
      <input type="text" placeholder="Message" />
      <input type="text" placeholder="Email"/>
      <input type="text" placeholder="Confirm Email" />
      <button type="submit">
        {props.isRegistred ? 'Registre' : 'Login'} 
      </button>
    </form>
  );
}
