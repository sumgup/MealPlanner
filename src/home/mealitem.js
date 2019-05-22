import React from 'react';
import styled from 'styled-components'

// Could be anything ranging from Beverage, Dessert,Soup 
const Listitem = styled.li`
  border-radius: 3px;
  font-size : 2em;
`

function MealItem(props)
{
    return(
        <div className="mealitem">
            <Listitem>{props.value}</Listitem>
        </div>
    );
}

export default MealItem;