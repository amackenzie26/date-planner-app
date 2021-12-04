import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    return (
        <div class="home-container">
            <h1 class="welcome">Welcome to Rendez-Vous!</h1>

            <div class="card login">
                <h2 class="signup-text">Create an account:</h2>
                <form class="signup-form">
                    <label for="username-signup">Username</label>
                    <input class="username-signup" id="username-signup" />
                    
                    <label for="firstname-signup">First Name</label>
                    <input class="firstname-signup" id="firstname-signup" />

                    <label for="lastname-signup">Last Name</label>
                    <input class="lastname-signup" id="lastname-signup" />

                    <label for="email-signup">Email</label>
                    <input class="email-signup" id="email-signup" />

                    <label for="password-signup">Password</label>
                    <input class="password-signup" id="password-signup" />

                    <label for="confirm-password-signup">Confirm Password</label>
                    <input class="confirm-password-signup" id="confirm-password-signup" />
                    
                    <button class="btn submit-button">Create Account</button>
                </form>
            </div>
            {/* <img class="logo"></img> */}
            <h3 class="slogan">CATCHY SLOGAN HERE</h3>
        </div>
    )

}

export default Signup;