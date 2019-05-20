import React from 'react';
import Breakfast from './breakfast';
import Lunch from './lunch';
import Dinner from './dinner';
import Supper from './supper';
import styled, { css }  from 'styled-components'


const MealPlanForDayCard = styled.div`
  padding: 4em;
`

function Meals(props){
    return(
        <MealPlanForDayCard>
            <Breakfast/>
            {/* <Lunch/>
            <Supper/>
            <Dinner/> */}
        </MealPlanForDayCard>
    );
}

export default Meals;