import React from 'react';

function MealItem(props)
{
    return(
        <div className="mealitem">
            <li>{props.value}</li>
        </div>
    );
}

export default MealItem;