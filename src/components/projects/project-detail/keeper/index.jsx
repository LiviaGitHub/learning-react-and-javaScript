import React from 'react';
import { Header } from '../../../header';
import { Note } from './Note.jsx';   
import { notes } from './notes'; 
import './index.css';  


export const Keeper = () => {
    return (
        <div>
            <Header />
            {/* With this, the notes array will be mapped and each 
                Note will be rendered with its respective key, 
                title and content, without import errors. */}
            {/* This is a function, there is an arrow => */}
            {notes.map((note) => (
                <Note 
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            ))}
        </div>
    );
}

