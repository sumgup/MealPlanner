import React from 'react';
import MealType from './mealtype'

const mealTypes = ['Breakfast','Lunch','Dinner']

function DailyMealPlan(props){
    return(
        <div className="DailyMealPlan">
            <li>{props.value}</li>
            <ul>{mealTypes.map((value,index) => 
                    <MealType value={value} key={index}/>)}
            </ul>
        </div>
    );
}

export default DailyMealPlan;