import React from 'react';
import DailyMealPlan from './dailymealplan';
import styles from './mealboard.module.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function WeeklyMealPlan() {
  let weeklyMealPLan = (
    <div className="WeeklyMealPlanRobot">
      <header className="App-header">
      <button className={styles.pressed}>Generate Meal Plan</button>
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
