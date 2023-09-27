import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

{/* React Router has the ability to leverage declarative routing and 
  the better user experience that React Router offers. */}
export const Header = () => {
  return (
      <nav className='header'>
        <p className='p'> portfolio </p>
        <Link to='/contact' className='header-link'>
          contact
        </Link>
        <Link to='/projects' className='header-link'>
          projects
        </Link>
        <Link to='/about' className='header-link'>
          about
        </Link>
        <Link to='/home' className='header-link'>
          home
        </Link>
      </nav>
  );
};
