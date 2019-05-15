import React from 'react';

function Header(props) {
    return (
        <div>
            <img src="logo.png" alt="mealplanner" />
            <nav>
                <ul>
                    <li><a href="bikes">Features</a></li>
                    <li><a href="bikes/bmx">About</a></li>
                    <li><a href="bikes/bmx">Contact</a></li>
                    <li><a href="bikes/bmx">Signup</a></li>
                    <li>Or</li>
                    <li><a href="bikes/bmx">Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
