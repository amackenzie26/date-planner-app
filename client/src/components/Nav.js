import React from 'react';
import Auth from '../utils/auth';
import { useHistory } from 'react-router';

const Nav = () => {

    const history = useHistory();

    const handlePageChange = (page) => {
        if (!Auth.loggedIn()) {
            alert("You must log in!");
        } else {
            if (page === "prompts") {
                history.push("/prompts")
            }
            if (page === "dashboard") {
                history.push("/dashboard")
            }
            
            if (page === "calendar") {
                window.location.href("https://calendar.google.com/");
            }
        }
    }

    const handleLogout = () => {
        Auth.logout()
    }

    return (
        <header class="header-nav">
            <div class="app-prompt">
                <a href="#prompts" class="plan-link" onClick={() => handlePageChange("prompts")}>Plan A Date</a>
            </div>
            <nav class='app-nav'>
                <a href="#dashboard" class="dashboard-link" onClick={() => handlePageChange("dashboard")}>Dashboard</a>
                <a href="#calendar" class="calendar-link" onClick={() => handlePageChange("calendar")}>My Calendar</a>
                {Auth.loggedIn() && (<a href="#logout" class="logout-link" onClick={handleLogout}>Logout</a>)}
            </nav>
        </header>
    )
}

export default Nav;