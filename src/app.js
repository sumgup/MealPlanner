import React from 'react';
//import LandingPage from './landing/landing';
import WeeklyMealPlan from '../src/home/weeklymealplan';
import GlobalStyle from './globalstyle';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={Theme}>
                <div>
                    <GlobalStyle />
                    <WeeklyMealPlan />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
