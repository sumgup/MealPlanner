import React from 'react';
import About from '../../about/about'
import Contact from '../../contact/contact'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header(props) {
    return (
        <Router>
            <div>
                <img src="logo.png" alt="mealplanner" />
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>Or</li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/about/" component={About} />
                <Route path="/contact/" component={Contact} />
                <Route path="/signup/" component={About} />
                <Route path="/login/" component={About} />
            </div>
        </Router>
    );
}

export default Header;
