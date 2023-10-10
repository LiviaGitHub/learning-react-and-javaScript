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

      </ul>
    </div>
  );
};

        // {/* {projects.map((project) => (
        //   <li key={project.id}>
        //     {/* Renderize links específicos para cada projeto */}
        //     <Link to={project.link}>{project.title}</Link>
        //   </li>
        // ))} */}