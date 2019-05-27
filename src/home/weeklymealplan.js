import React from 'react';
import DayMealPlan from './daymealplan';
import styled from 'styled-components';

const weeklygridgap = "1em";

const WeeklyMealPlan = styled.div`
  margin: 2em;
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: auto;
  grid-column-gap: ${weeklygridgap};

  @media (max-width: 599px) {
    grid-template-columns: repeat(1, auto);
    grid-row-gap: 5em;
  }
`
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  font-family : ${props=> props.theme.font};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function DisplayWeeklyMealPlan() {
  let weeklyMealPLan = (
    <div>
      <header>
      <Button>Generate Meal Plan</Button>
        <label>WeeklyMealPlanRobot</label>
        <WeeklyMealPlan>{
          days.map((day, index) =>
            <DayMealPlan 
              key={index}
              isExpanded={day === 'monday' ? true : false}
              value={day} />)
        }
        </WeeklyMealPlan>
      </header>
    </div>
  );
  return weeklyMealPLan;
}

export default DisplayWeeklyMealPlan;
