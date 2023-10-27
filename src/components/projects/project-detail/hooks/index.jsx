import {useState} from 'react';

// Hook (and custom hooks in general) should be generic -
// It is not limited to one specific input.
const hooks = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        valueIsValid: valueIsValid,
        hasError,
        valueInputChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default hooks;