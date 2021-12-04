import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div class="home-container">
            <h1 class="welcome">Welcome to Rendez-Vous!</h1>

            <div class="card-login">
                <h2 class="login-text">Login to your account</h2>
                <form class="login-form">
                    <input type="text" class="username-login"  placeholder="Username" />
                    <input type="text" class="password-login" placeholder="Password" />
                    <button class="submit-button">Login</button>
                </form>
                <button class="signup-button">Click here to sign up for an account. It's free!</button>
            </div>
            {/* <img class="logo"></img> */}
            <h3 class="slogan">CATCHY SLOGAN HERE</h3>
        </div>
    )

}

export default Home;