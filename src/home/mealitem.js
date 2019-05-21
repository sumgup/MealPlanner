import React from 'react';
import styled from 'styled-components'

// Could be anything ranging from Beverage, Dessert,Soup 

const listitem = styled.li`
    font-family : ${props => props.theme.font};
`

function MealItem(props)
{
    return(
        <div className="mealitem">
            <listitem>{props.value}</listitem>
        </div>
    );
}

export default MealItem;