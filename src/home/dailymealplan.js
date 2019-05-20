import React from 'react';
import Meals from './meals'

const mealTypess = ['Breakfast']

function DailyMealPlan(props) {
    return (
        <div className="DailyMealPlan">
            <li>{props.value}</li>
            <ul>{mealTypess.map((value, index) =>
                <Meals value={value} key={index} />)}
            </ul>
        </div>
    );
}

export default DailyMealPlan;