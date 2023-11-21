import React from 'react';
import { Header } from '../../../header';

export const TemplateLiteralsPage = () => {

    /**
     * template literals are a flexible and readable way to create strings. 
     * They are defined using backticks ( ) and allow for expression interpolation and the creation of multiline strings.
     */

    // basic example of a template literal:
    const name = 'World';
    const greeting = `Hello, ${name}!`;
    console.log(greeting);
    // Output: Hello, World!

    // Expression Interpolation
    const a = 5;
    const b = 10;
    console.log(`The sum of ${a} and ${b} is ${a + b}.`);
    // Output: The sum of 5 and 10 is 15.

    // Multiline Strings
    const multiLineString = `
    This is a
     multiline string.
`;
    console.log(multiLineString);

    // Tagged Templates
    function tagFunction(strings, ...values) {
        console.log(strings); // Array of string parts
        console.log(values); // Array of expression values
    }

    const a1 = 5;
    const b1 = 10;
    tagFunction`The sum of ${a} and ${b} is ${a + b}.`;



    return (
        <div className='home-container'>
            <Header />
            <h1>Template Literals</h1>
            <p>Expression Interpolation {`The sum of ${a} and ${b} is ${a + b}.`}</p>
            <p>Multiline Strings {multiLineString}</p>
            <p>Tagged Templates {`The sum of ${a1} and ${b1} is ${a1 + b1}.`}</p>
        </div>
    );
};
