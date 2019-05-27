import React from 'react';
import styled from 'styled-components'

class Meal extends React.Component {

    constructor(props) {
        super(props);
    }

  

    render() {
        const StyledMeal = styled.div`
         display: grid;
        grid-template-columns: 30% 70%;
        min-height: 12.5em;`
        const DayIndicator = styled.div`
        background: yellow;
        border-radius: 10px 0px 0px 10px;  
        `
        const Recipes = styled.div`
        border-radius: 0px 10px 10px 0px;
        background: lightgreen;
        `
        return (
            <React.Fragment>
                <StyledMeal>
                    <DayIndicator />
                    <Recipes />
                </StyledMeal>
            </React.Fragment>
        );
    }
}

export default Meal;