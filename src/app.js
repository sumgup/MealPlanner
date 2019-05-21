import React from 'react';
//import LandingPage from './landing/landing';
import WeeklyMealPlan from '../src/home/weeklymealplan';
import GlobalStyle from './globalstyle';
import { ThemeProvider } from 'styled-components';

const theme = {
    font: 'Calibri'
};

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <GlobalStyle />
                    <WeeklyMealPlan />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
