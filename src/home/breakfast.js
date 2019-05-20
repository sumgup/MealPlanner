import React from 'react';
import MealItem from './mealitem';
import styled, { css }  from 'styled-components'

const Card = styled.div`
  border-radius: 30px 30px 0px 0px;
  display:grid;
  width:300px;
  height:200px;
  grid-template-columns: 60px 60px;
  grid-template-areas:"daytimecolor" "mealitems";
  `
  const DaytimeColorStripColumn = styled.div`
     background: yellow;
     grid-area : daytimecolor;
  `

  const Recipes = styled.div`
    background:white;
    grid-area : mealitems;
  `

// Kind of Meal
 class Breakfast extends React.Component{
    render(){
        return(
            <Card>
              <DaytimeColorStripColumn/>
              <Recipes>
                <MealItem>Oats</MealItem>
                <MealItem>Sandwich</MealItem>
                <MealItem>Milk</MealItem>
              </Recipes>
            </Card>
        );
    }
}

export default Breakfast;
