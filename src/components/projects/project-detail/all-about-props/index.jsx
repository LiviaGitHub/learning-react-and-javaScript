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
        <div>
            <img
                className="avatar circle-img"
                src={getImageUrls(person)}
                alt={person.name}
                width={size}
                height={size}
            />
            {/* class 'name' */}
            {/* JSX expressions must have one parent element. */}
            <h2 className="name">{person.name}</h2>
        </div>
    );
}


export function AvatarTrad(props) {
    return (
      <img
        className="avatar circle-img"
        src={getImageUrls(props.person)}
        alt={props.person.name}
        width={props.size || 100}
        height={props.size || 100}
      />
    );
}

export function Info(props) {
    return (
        <div className="info">
            <h2 className="name"> {props.name} </h2>
            <p> {props.info} </p>
        </div>
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
                        name: 'Aklilu Lemma',
                        imageId: 'akliluLemma'
                    }}
                />
            </Card>

            <Card>
                <Avatar 
                    size={80} 
                    person={{ 
                        name: 'Aklilu Lemma', 
                        imageId: 'akliluLemma' 
                    }} 
                />
            </Card>

            <Info
                name="Livia"
                info="Software developer"
            />

            <Avatar 
                person={{ 
                    name: 'Lin Lanying', 
                    imageId: 'linLanying' 
                }} 
            />

            <Info
                name="Alice"
                info="Doctor"
            />

            <Card>
                <AvatarTrad
                    size={80} 
                    person={{ 
                        name: 'Aklilu Lemma', 
                        imageId: 'akliluLemma' 
                    }} 
                />
            </Card>
        </div >
    );
};
