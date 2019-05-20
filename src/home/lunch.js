import React from 'react';
import Dish from './mealitem';
import styled, { css }  from 'styled-components'


const Card = styled.div`
  padding: 4em;
  background: blue;   
`

// Kind of Meal
 class Lunch extends React.Component{
    render(){
        return(
            <Card>
                <h1>Lunch</h1>
                <Dish value="Oats"/>
                <Dish value="Sandwich"/>
            </Card>
        );
    }
}

export default Lunch;
