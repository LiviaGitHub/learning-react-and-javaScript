import React from 'react';

export const EmojiItem = (props) => {
    return (
        <dl className="term">
            <dt>
                <span className="emoji">{props.emoji}</span>
                <span>{props.name}</span>
            </dt>
            <dd>{props.meaning}</dd>
        </dl>
    );
}

// Description List
// Definition Term
// Definition Description