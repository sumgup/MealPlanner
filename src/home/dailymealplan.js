import React from 'react';
import Meals from './meals'
import styled from 'styled-components'

const mealTypess = ['Breakfast']

const List = styled.ul`
list-style-type: none;
`

function DailyMealPlan(props) {
    return (
        <div className="DailyMealPlan">
            <li>{props.value}</li>
            <List>{mealTypess.map((value, index) =>
                <Meals value={value} key={index} />)}
            </List>
        </div>
    );
}

export default DailyMealPlan;