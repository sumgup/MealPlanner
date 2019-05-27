import React from 'react';
import Meal from './meal';
import styled from 'styled-components';

class DayMealPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cardWidth: this.props.isExpanded ? '20em' : '5em' };
    }

    expand = () => {
        this.setState({ cardWidth: '20em' });
    }

    render() {
        const DayMealPlan = styled.div`
        display: grid;
        width: ${this.state.cardWidth};
        border: 0px solid black;
        cursor: pointer;  
        `;

        const StyledDailyMealPlan = styled.div`
        transition: 0.75s;`

        const mealKinds = ['breakfast', 'lunch', 'dinner'];
        
        return (
            <StyledDailyMealPlan
                id={this.props.value}
                isExpanded={this.state.active}
                isActive={this.state.active}>
                
                <h2>{this.props.value}</h2>
                
                <DayMealPlan 
                    onClick={this.expand}>
                {
                    mealKinds.map((mealkind, index) =>
                        <Meal
                            key={index}
                            kind={mealkind}
                            isExpanded={this.props.isExpanded} />)
                }
                </DayMealPlan>
            </StyledDailyMealPlan>
        );
    }
}

export default DayMealPlan;