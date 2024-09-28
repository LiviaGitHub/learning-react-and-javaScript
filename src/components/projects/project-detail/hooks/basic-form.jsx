import React, { useState } from 'react';
import { Header } from '../../../header';
import hooks from './index.jsx'

const isNotEmpty = (value => value.trim() !== '');

export const BasicFormPage = () => {
    const {
        value: nameValue,
        valueIsValid: nameIsValid,
        hasError: nameHasError,
        valueInputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = hooks(isNotEmpty);

    hooks(isNotEmpty);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Formulário:', formData);
  };

  return (
    <div>
      <Header />
      <h1>Re-Using The Custom Hook</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={nameChangeHandler}
            value={nameValue}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default BasicFormPage;
