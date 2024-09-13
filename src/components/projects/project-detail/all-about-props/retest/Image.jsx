import React from 'react';
import './index.css';
import { getImageUrls } from './utils.js';

export function Image (person, size = 100) {
    return (
        <div>
            <img
                className="avatar circle-img"
                src={getImageUrls(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        </div>
    );
}

