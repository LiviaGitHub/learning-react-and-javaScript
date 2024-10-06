import React, { useState } from 'react';
import './index.css';
import { Header } from '../../../header';

export const FormEventPage = () => {

    const [country, setCountry] = useState('');
    const [headingText, setHeadingText] = useState('Brazil');

    function handleChange(event) {
        setCountry(event.target.value)
    }

    function handleClick() {
        setHeadingText(country)

        event.preventDefault();
    }

    return (
        <div>
            <Header />
            <form className='form-container'>
                <h1 className='form-h1'>
                    My country is {headingText}
                </h1>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your name?"
                    value={country}
                />
                <button
                type='Submit'
                    onClick={handleClick}
                >
                    Send
                </button>
            </form>
        </div>
    );
}

// https://legacy.reactjs.org/docs/forms.html#controlled-components
// event is the change event.
// event.target is the <input> element (or another element that triggered the event).
// event.target.value is the value entered by the user in the text field (in this example, "Carlos").