import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {



    return (
        <div class="home-container">
            <h1 class="welcome">Welcome to Rendez-Vous!</h1>

            <div class="card login">
                <h2 class="signup-text">Create an account:</h2>
                <form class="login-form">
                    <input class="username-signup">Create a username:</input>
                    <input class="password-signup">Create a password:</input>
                    <input class="first-signup">First name:</input>
                    <input class="last-signup">Last name:</input>
                    <input class="email-signup">Email:</input>
                    <button class="submit-button">Create Account</button>
                </form>
            </div>
            <img class="logo"></img>
            <h3 class="slogan">CATCHY SLOGAN HERE</h3>
        </div>
    )

}

export default Signup;