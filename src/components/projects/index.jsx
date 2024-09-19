import React from 'react';
// import { Link } from 'react-router-dom';
import { Header } from '../header';

export const ProjectsPage = () => {

  // const projects = [
  //   { id: 'p1', title: 'Destructuring Arrays', description: 'Destructuring Arrays', link: '/projects/project-detail' },
  //   { id: 'p2', title: 'Arrays', description: 'Arrays', link: '/projects/project-detail' },
  //   { id: 'p3', title: 'Project 3', description: 'Project 3 Description', link: '/projects/project-detail' },
  // ];

  return (
    <div className='home-container'>
      <Header />
      <h1>Learn Detail List</h1>
      <ul>
        <li>
          <a href='/projects/project-detail/destructuring-arrays'>Destructuring Arrays</a>
        </li>

        <li>
          <a href='/projects/project-detail/destructuring-objects'>Destructuring Objects</a>
        </li>

        <li>
          <a href='/projects/project-detail/handle-side-effects'>
            Handling Side Effects, Using Reducers and Using the Context API
          </a>
        </li>

        <li>
          <a href='/projects/project-detail/form-submission'>
            Form submission and getting User imput values
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/hooks'>
            Re-Using The Custom Hook
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/rest-spread-operator'>
            Rest/Spread Operator
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/template-literals'>
            Template Literals
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/using-and-outputting-dynamic-values'>
            Using and Outputting dynamic values
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/alternative-props-syntaxes'>
            Alternative Props Syntaxes
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/all-about-props'>
            All about Props
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/use-state'>
            Use State
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/content-editable'>
          Content Editable
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/maping-data'>
          Maping Data
          </a>
        </li>
        <li>
          <a href='/projects/project-detail/keeper'>
          Keeper
          </a>
        </li>
      </ul>
    </div>
  );
};

