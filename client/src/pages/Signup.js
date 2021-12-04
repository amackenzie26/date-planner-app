import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { checkPassword, validateEmail, checkPasswordsMatch } from '../utils/helpers';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'username') {
            setUsername(inputValue);
        }
        else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'firstname') {
            setFirstname(inputValue);
        } else if (inputType === 'lastname') {
            setLastname(inputValue);
        } else if (inputType === 'password') {
            setPassword(inputValue);
        } else if (inputType === 'confirmPassword') {
            setConfirmPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        if (!checkPasswordsMatch(password, confirmPassword)) {
            setErrorMessage(
              `Passwords don't match`
            );
            return;
        }

        if (!checkPassword(password)) {
            setErrorMessage(
              `Choose a more secure password{ `
            );
            return;
        }

        setUsername('');
        setEmail('');
        setFirstname('');
        setLastname('');
        setPassword('');
        setConfirmPassword('');

        history.push('/');
    }

    return (
        <div class="home-container">
            <h1 class="welcome">Welcome to Rendez-Vous!</h1>

            <div class="card">
                <h2 class="signup-text">Create an account:</h2>
                <form class="signup-form form">
                    <label for="username-signup">Username</label>
                    <input 
                        class="username-signup" 
                        id="username-signup"
                        name="username"
                        type="text"
                        value={username}
                        onChange={handleInputChange}
                    />
                    
                    <label for="firstname-signup">First Name</label>
                    <input 
                        class="firstname-signup" 
                        id="firstname-signup" 
                        name="firstname"
                        type="text"
                        value={firstname}
                        onChange={handleInputChange}
                    />

                    <label for="lastname-signup">Last Name</label>
                    <input 
                        class="lastname-signup" 
                        id="lastname-signup" 
                        name="lastname"
                        type="text"
                        value={lastname}
                        onChange={handleInputChange}
                    />

                    <label for="email-signup">Email</label>
                    <input 
                        class="email-signup" 
                        id="email-signup" 
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <label for="password-signup">Password</label>
                    <input 
                        class="password-signup" 
                        id="password-signup" 
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleInputChange}
                    />

                    <label for="confirm-password-signup">Confirm Password</label>
                    <input 
                        class="confirm-password-signup" 
                        id="confirm-password-signup" 
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={handleInputChange}
                    />

                    <button class="btn submit-button" onClick={handleFormSubmit}>Create Account</button>

                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
            {/* <img class="logo"></img> */}
            <h3 class="slogan">CATCHY SLOGAN HERE</h3>
        </div>
    )

}

export default Signup;