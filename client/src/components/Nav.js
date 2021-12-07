import React from 'react';
import Auth from '../utils/auth';

const Nav = () => {

    const handleLogout = () => {
        Auth.logout()
    }

    return (
        <header>
            <nav class='app-nav'>
                <a href="/prompts" class="plan-link">Plan A Date</a>
                <a href="/dashboard" class="dashboard-link">Dashboard</a>
                <a href="https://calendar.google.com/" class="calendar-link" target="https://calendar.google.com/">My Calendar</a>
                {Auth.loggedIn() && (<a href="#logout" class="logout-link" onClick={handleLogout}>Logout</a>)}
            </nav>
        </header>
    )
}

export default Nav;