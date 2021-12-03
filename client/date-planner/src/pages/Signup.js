import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {



    return (
        <div className="home-container">
            <h1 className="welcome">Welcome to Rendez-Vous!</h1>

            <div className="card login">
                <h2 className="signup-text">Create an account:</h2>
                <form className="login-form">
                    <input className="username-signup">Create a username:</input>
                    <input className="password-signup">Create a password:</input>
                    <input className="first-signup">First name:</input>
                    <input className="last-signup">Last name:</input>
                    <input className="email-signup">Email:</input>
                    <button className="submit-button">Create Account</button>
                </form>
            </div>
            <img className="logo"></img>
            <h3 className="slogan">CATCHY SLOGAN HERE</h3>
        </div>
    )

}

export default Signup;