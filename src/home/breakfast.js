import React from 'react';
import MealItem from './mealitem';
import styled from 'styled-components'

const cornerRadius = 1.25;

const Card = styled.div`
  display:grid;
  grid-template-columns: 0.5fr 3fr;
  min-height:12.5em;`

const DaytimeColorStripColumn = styled.div`
    border-radius: ${cornerRadius}em 0em 0em ${cornerRadius}em;
     background: yellow;
  `
const Recipes = styled.div`
    border-radius: 0em ${cornerRadius}em ${cornerRadius}em 0em;
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
