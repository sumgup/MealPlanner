import React from 'react';

function MealItem(props)
{
    return(
        <div className="mealitem">
            <label>{props.value}</label>
        </div>
    );
}

export default MealItem;