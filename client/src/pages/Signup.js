import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { checkPassword, validateEmail, checkPasswordsMatch } from '../utils/helpers';
import { createUser } from '../utils/api';

const Signup = () => {
    
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        if (name === 'confirmPassword') {
            setConfirmPassword(value);
        } else {
            setUserData({ ...userData, [name]: value })
        }

    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(userData.email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        if (!checkPasswordsMatch(userData.password, confirmPassword)) {
            setErrorMessage(
              `Passwords don't match`
            );
            return;
        }

        if (!checkPassword(userData.password)) {
            setErrorMessage(
              `Choose a more secure password{ `
            );
            return;
        }

        try {
            const res = await createUser(userData);

            if (!res.ok) {
                throw new Error(`Couldn't create user`);
            }

            const user = await res.json();
            console.log(user);
            history.push('/');
        } catch (err) {
            console.error(err);
        }

        // setUsername('');
        // setEmail('');
        // setFirstname('');
        // setLastname('');
        // setPassword('');
        // setConfirmPassword('');

        
    }

    return (
        <div class="home-container">
            <h1 class="welcome">Welcome to Rendez-Vous!</h1>

            <div class="card">
                <h2 class="signup-text">Create an account:</h2>
                <form class="signup-form form">
                    <label htmlFor="username-signup">Username</label>
                    <input 
                        class="username-signup" 
                        id="username-signup"
                        name="username"
                        type="text"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                    
                    <label htmlFor="firstname-signup">First Name</label>
                    <input 
                        class="firstname-signup" 
                        id="firstname-signup" 
                        name="firstName"
                        type="text"
                        value={userData.firstName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="lastname-signup">Last Name</label>
                    <input 
                        class="lastname-signup" 
                        id="lastname-signup" 
                        name="lastName"
                        type="text"
                        value={userData.lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="email-signup">Email</label>
                    <input 
                        class="email-signup" 
                        id="email-signup" 
                        name="email"
                        type="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="password-signup">Password</label>
                    <input 
                        class="password-signup" 
                        id="password-signup" 
                        name="password"
                        type="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="confirm-password-signup">Confirm Password</label>
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
            
        </div>
    )

}

export default Signup;