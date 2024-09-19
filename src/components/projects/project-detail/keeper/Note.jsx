import React from 'react';
import './index.css';

export const Note = ({ title, content }) => {
    return (
        <div className="note">
            <h1 className="notetitle">{title}</h1>
            <p className="paragraph">{content}</p>
        </div>
    );
};
