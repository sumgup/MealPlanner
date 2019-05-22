import React from 'react';
import DailyMealPlan from './dailymealplan';
import styled from 'styled-components'


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

const WeeklyList = styled.ul`
list-style-type: none;
`

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function WeeklyMealPlan() {
  let weeklyMealPLan = (
    <div>
      <header>
      <Button>Generate Meal Plan</Button>
        <label>WeeklyMealPlanRobot</label>
        <WeeklyList>{
          days.map((day, index) =>
            <DailyMealPlan key={index} value={day} />)
        }
        </WeeklyList>
      </header>
    </div>
  );

  return weeklyMealPLan;
  }

  export default WeeklyMealPlan;
