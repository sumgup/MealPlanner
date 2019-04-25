import React from 'react';
import MealType from './mealtype'

function DailyMealPlan(props){
    return(
        <div className="DailyMealPlan">
            <label>{props.value}</label>
            <MealType value="Breakfast"/>
            <MealType value="Lunch"/>
            <MealType value="Dinner"/>
        </div>
    );
}

export default DailyMealPlan;