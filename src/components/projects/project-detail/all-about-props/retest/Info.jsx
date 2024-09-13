import React from 'react';
import './index.css';

export function Info({ title, infoDetail }) {
    return (
        <div>
            <div className="info">
                <h2>{title}</h2>
                <p>{infoDetail}</p>
            </div>
        </div>
    );
}

export function Info2(props) {
    return (
        <div>
            <div className="info">
                <h2>{props.title}</h2>
                <p>{props.infoDetail}</p>
            </div>
        </div>
    );
}
