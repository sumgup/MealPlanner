import React from 'react';
import ReactDOM from 'react-dom';
import DailyMealPlan from './dailymealplan'

function WeeklyMealPlan() {
    return (
      <div className="WeeklyMealPlanRobot">
        <header className="App-header">
         <label>WeeklyMealPlanRobot</label>
         <DailyMealPlan value="Monday"/>
         <DailyMealPlan value="Tuesday"/>
         <DailyMealPlan value="Wednesday"/>
         <DailyMealPlan value="Thursday"/>
         <DailyMealPlan value="Friday"/>
         <DailyMealPlan value="Saturday"/>
         <DailyMealPlan value="Sunday"/>
        </header>
      </div>
    );
  }

  export default WeeklyMealPlan;
