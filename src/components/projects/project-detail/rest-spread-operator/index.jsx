import React from 'react';
import { Header } from '../../../header';

export const RestSpreadOperatorPage = () => {

    // Arrays
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];

    console.log(arr2); // Output: [1, 2, 3, 4, 5]

    // Objects
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3, d: 4 };

    console.log(obj2); // Output: { a: 1, b: 2, c: 3, d: 4 }

    // Operator Rest (...)
    const [first, second, ...rest] = [1, 2, 3, 4, 5];

    console.log(first); // Output: 1
    console.log(second); // Output: 2
    console.log(rest); // Output: [3, 4, 5]

    // parameter function
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
      }
      
      console.log(sum(1, 2, 3, 4, 5)); // Output: 15      

    return (
        <div className='home-container'>
            <Header />
            <h1>Rest/Spread Operator</h1>
            <p>First number {first}</p>
            <p>Second number {second}</p>
            <p>Now the rest {rest}</p>
        </div>
    );
};
