import React from 'react';
import { Header } from '../../../header';
import { getImageUrls } from './utils.js';
import './index.css';

export function Card({ children }) {
    return (
        <div className="Card">
            {children}
        </div>
    );
}

export function Avatar({ person, size = 100 }) {
    return (
        <img
            className="avatar"
            src={getImageUrls(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}
export const AllAboutPropsPage = () => {
    return (
        <div className='home-container'>
            <Header />
            <h1>All about Props</h1>
            <Card>
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }}
                />
            </Card>
            <Avatar size={80} person={{ name: 'Aklilu Lemma', imageId: 'akliluLemma' }} />
            <Avatar person={{ name: 'Lin Lanying', imageId: 'linLanying' }} />
        </div >
    );
};

/**
 * 
 * Props is data coming from the outside, and can only be updated by the parent component.
 * Props are immutable.
 * If you need to mutate props you actually need stated.
 * Props has one-way DATA flow
 * <Avatar {...props} /> This forwards all of AllAboutPropsPage to the Avatar without listing each of their names.
 * To pass props, add them to the JSX, just like you would with HTML attributes.
 * To read props, use the function Avatar({ person, size }) destructuring syntax.
 * You can specify a default value like size = 100, which is used for missing and undefined props.
 * You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
 * Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
 * Props are read-only snapshots in time: every render receives a new version of props.
 * You can’t change props. When you need interactivity, you’ll need to set state.
 * 
 */