import React from 'react';
import Dish from './mealitem';
import styled, { css }  from 'styled-components'


const Card = styled.div`
  padding: 4em;
  background: black; 
  font-color : white;  
`

// Kind of Meal
 class Dinner extends React.Component{
    render(){
        return(
            <Card>
                <h1>Dinner</h1>
                <Dish value="Oats"/>
                <Dish value="Sandwich"/>
            </Card>
        );
    }
}

export default Dinner;
