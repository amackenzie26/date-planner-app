import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authenticateUser } from '../utils/api';

const Home = () => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await authenticateUser(userData);

            if (!res.ok) {
                setErrorMessage(`User or Password incorrect`);
                throw new Error(`Couldn't authenticate user`);
            }

            const user = await res.json();
            console.log(user);
            history.push('/dashboard');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div class="home-container">
            <h1 class="welcome">Welcome to Rendez-Vous!</h1>

            <div class="card-login">
                <h2 class="login-text">Log In to Your Account:</h2>
                <form class="login-form">
                    <label class="login-font" htmlFor="username-login">Username</label>
                    <input
                        type="text"
                        class="username-login"
                        id="username-login"
                        placeholder="Username"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                    <label class="login-font" htmlFor="password-login">Password</label>
                    <input
                        type="password"
                        class="password-login"
                        id="password-login"
                        placeholder="Password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                    <button class="btn btn-success submit-button" onClick={handleFormSubmit}>Login</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <Link to="/signup">
                    <button className="btn btn-lg btn-danger signup-button">Click here to sign up for an account. It's free!</button>
                </Link>
            </div>
        

        </div>
    )

}

export default Home;