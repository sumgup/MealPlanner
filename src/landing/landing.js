import React from 'react';
import './landing.css';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import Main from './main';

function LandingPage(props){
    return(
      <div class="container">
        <Header/> 
        <Main/>
        <Footer/>
       </div>
    );
}

export default LandingPage;
