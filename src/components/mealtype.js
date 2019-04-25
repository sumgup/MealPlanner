import React from 'react';
import MealItem from './mealitem';

function MealType(props){
    return(
        <div className="MealType">
            <label>{props.value}</label>
            <MealItem value="Oats"/>
        </div>
    );
}

export default MealType;