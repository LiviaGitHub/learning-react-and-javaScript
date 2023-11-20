import React, { useEffect, useState } from 'react';
import { Header } from '../../../header';
import './index.css';

export const MealsPage = () => {
    const [loadMeals, setLoadMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://http://localhost:3000/meals');

            if (!response.ok) {
                // handle error here
            }

            const meals = await response.json();
            setLoadMeals(meals);
        }

        fetchMeals();
    }, []);

    return (
        <div>
            <Header />
            <ul id="meals">
                {loadMeals.map((meal) => (
                    <li key={meal.id}>{meal.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MealsPage;