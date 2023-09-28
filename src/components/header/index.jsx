import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

{
  /* React Router has the ability to leverage declarative routing and 
  the better user experience that React Router offers. */
}
export const Header = () => {
  return (
    <nav className="header">
      <p className="p"> portfolio </p>
      {/* Add <nav></nav> */}
      <NavLink
        to="/contact"
        className="header-link"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        contact
      </NavLink>
      <NavLink
        to="/projects"
        className="header-link"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        projects
      </NavLink>
      <NavLink
        to="/about"
        className="header-link"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        about
      </NavLink>
      <NavLink
        to="/home"
        className="header-link"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        home
      </NavLink>
    </nav>
  );
};
