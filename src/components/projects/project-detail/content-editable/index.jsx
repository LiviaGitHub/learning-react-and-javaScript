import React from 'react';
import { Header } from '../../../header';

export const ContentEditablePage = () => {

    return (
        <div className='home-container'>
            <Header />
            <h1 contentEditable>Content Editable</h1>
            <h3>HTML Global Attributes</h3>
            <p> <a href="https://www.w3schools.com/tags/ref_standardattributes.asp"></a>
            </p>
        </div>
    );
};
