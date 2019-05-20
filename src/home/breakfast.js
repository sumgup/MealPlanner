import React from 'react';
import MealItem from './mealitem';
import styled, { css } from 'styled-components'

const cornerRadius = 20;

const Card = styled.div`
  display:grid;
  grid-template-columns: 50px 250px;
  min-height:200px;`

const DaytimeColorStripColumn = styled.div`
    border-radius: ${cornerRadius}px 0px 0px ${cornerRadius}px;
     background: yellow;
  `
const Recipes = styled.div`
    border-radius: 0px ${cornerRadius}px ${cornerRadius}px 0px;
    background:lightgrey;
  `

class Breakfast extends React.Component {
    render() {
        return (
            <Card>
                <DaytimeColorStripColumn />
                <Recipes>
                    <MealItem value="Oats"></MealItem>
                    <MealItem value="Sandwich"></MealItem>
                    <MealItem value="Milk"></MealItem>
                </Recipes>
            </Card>
        );
    }
}

export default Breakfast;
