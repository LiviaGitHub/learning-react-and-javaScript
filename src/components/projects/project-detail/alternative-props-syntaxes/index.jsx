import React from 'react';
import { Header } from '../../../header';

export const AlternativePropsSyntaxesPage = () => {
    const CORE_CONCEPTS = [
        {
            title: 'React Components',
            description: `Components are the building blocks of a React application. 
             They encapsulate the UI and its behavior, making the code more modular and reusable.`,
        },
        {
            title: 'State and Props',
            description: `State represents the internal data of a component, 
            and props are used to pass data from a parent to a child component. 
            Together, they manage the dynamic aspects of a React application.`,
        },
        {
            title: 'Virtual DOM',
            description: `React uses a Virtual DOM to optimize the updating process. 
            Instead of updating the actual DOM directly, 
            React compares the Virtual DOM with the previous state and updates only the necessary parts of the actual DOM.`,
        },
        {
            title: 'React Hooks',
            description: `Hooks are functions that enable functional components to have state and lifecycle features. 
            They provide a way to use state and lifecycle methods in functional components, making them more powerful.`,
        }
    ];

    console.log(CORE_CONCEPTS);

    function CoreConcept(props) {
        return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        );
    }

    return (
        <div className='home-container'>
            <Header />
            <h1>Alternative Props Syntaxes</h1>
            <div>
            {CORE_CONCEPTS.map((concept, index) => (
                <CoreConcept key={index} title={concept.title} description={concept.description} />
        ))}
            </div>
        </div>
    );
};
