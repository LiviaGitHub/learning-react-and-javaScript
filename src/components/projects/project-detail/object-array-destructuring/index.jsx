import React from 'react';
import cars from './data';

import { Header } from '../../../header';

export const ObjectAndArrayDestructuringPage = () => {

    const [honda, tesla] = cars;

    const {
      speedStats: { topSpeed: hondaTopSpeed }
    } = honda;
    const {
      speedStats: { topSpeed: teslaTopSpeed }
    } = tesla;
    
    const {
      coloursByPopularity: [hondaTopColour]
    } = honda;
    const {
      coloursByPopularity: [teslaTopColour]
    } = tesla;

  return (
    <div>
      <Header />
      <div>
        <table>
          <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
          </tr>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
          </tr>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

// Destructuring is being used to simplify code by allowing you to quickly access properties of objects and arrays 
// within honda and tesla without having to write long accessor chains like 
// honda.speedStats.topSpeed or tesla.coloursByPopularity[0].

// This makes the code cleaner, easier to read, and less error-prone 
// because you don't have to repeat the accessor structure.

// Destructuring: Best for small, fixed, known data.
// Data mapping (.map()): Best for dynamic data, variable-size arrays, 
// or when you want to minimize repetition and improve scalability.