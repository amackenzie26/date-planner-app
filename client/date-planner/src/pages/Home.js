import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

}

return (
    <div className="home-container">
        <h1 className="welcome">Welcome to Rendez-Vous!</h1>

        <div className="card login">
            <h2 className="login-text">Login to your account</h2>
            <form className="login-form">
                <input className="username-login">Username:</input>
                <input className="password-login">Password:</input>
                <button className="submit-button">Login</button>
            </form>
            <button className="signup-button">Click here to sign up for an account. It's free!</button>
        </div>
        <img className="logo"></img>
        <h3 className="slogan">CATCHY SLOGAN HERE</h3>
    </div>
)