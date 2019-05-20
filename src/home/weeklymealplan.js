import React from 'react';
import DailyMealPlan from './dailymealplan';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function WeeklyMealPlan() {
  let weeklyMealPLan = (
    <div>
      <header>
      <button>Generate Meal Plan</button>
        <label>WeeklyMealPlanRobot</label>
        <ul>{
          days.map((day, index) =>
            <DailyMealPlan key={index} value={day} />)
        }
        </ul>
      </header>
    </div>
  );

  return weeklyMealPLan;
  }

  export default WeeklyMealPlan;
