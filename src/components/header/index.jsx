import React from 'react';
import './header.css';

export const Header = () => {
  return (
      <header className='header'>
        <p className='p'> portfolio </p>
        <a href='/contact' className='contact-link'>
          contact
        </a>
        <a href='/projects' className='contact-link'>
          projects
        </a>
        <a href='/about' className='contact-link'>
          about
        </a>
        <a href='/home' className='contact-link'>
          home
        </a>
      </header>
  );
};
