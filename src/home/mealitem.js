import React from 'react';

// Could be anything ranging from Beverage, Dessert,Soup 

function MealItem(props)
{
    return(
        <div className="mealitem">
            <li>{props.value}</li>
        </div>
    );
}

export default MealItem;