import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';

const Home = () => {

    return (
        <div class="home-container">
            <h1 class="welcome">Welcome to Rendez-Vous!</h1>

            <div class="card-login">
                <h2 class="login-text">Login to your account</h2>
                <form class="login-form">
                    <label for="username-login">Username</label>
                    <input type="text" class="username-login" id="username-login" placeholder="Username" />
                    <label for="password-login">Password</label>
                    <input type="text" class="password-login" id="password-login" placeholder="Password" />
                    <button class="btn btn-success submit-button">Login</button>
                </form>
                <Link to="/signup">
                    <button className="btn btn-lg btn-danger signup-button">Click here to sign up for an account. It's free!</button>
                </Link>
            </div>
            {/* <img class="logo"></img> */}
            <h3 class="slogan">CATCHY SLOGAN HERE</h3>
        </div>
    )

}

export default Home;