import React from 'react';
import { Header } from '../../../header';

export const UsingAndOutputtingDynamicValuesPage = () => {
    const text = ['First text', 'Second text', 'Third text']

    function getRandomInt(max){
        return Math.floor(Math.random() * (max + 1));
    }

    const dynamicText = text[getRandomInt(2)];

    return (
        <div className='home-container'>
            <Header />
            <h1>Using and Outputting dynamic values [Core concept]</h1>
            <p>
                Check here the dynamic text - {dynamicText}
            </p>
        </div>
    );
};
