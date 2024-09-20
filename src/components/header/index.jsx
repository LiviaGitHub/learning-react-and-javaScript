import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export const Header = () => {
  return (
    <header>
      <nav className="header">
        <p className="p">portfolio</p>
        <NavLink to="/contact" className="header-link" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
          contact
        </NavLink>
        <NavLink to="/projects" className="header-link" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
          projects
        </NavLink>
        <NavLink to="/about" className="header-link" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
          about
        </NavLink>
        <NavLink to="/home" className="header-link" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
          home
        </NavLink>
      </nav>
    </header>
  );
};
