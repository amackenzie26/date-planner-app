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
        }
    }

    const handleLogout = () => {
        Auth.logout()
    }

    //<a href="https://calendar.google.com/" class="calendar-link" target="https://calendar.google.com/" onClick={() => handlePageChange("calendar")}>My Calendar</a>

    return (
        <header>
            <nav class='app-nav'>
                <a href="#" class="plan-link" onClick={() => handlePageChange("prompts")}>Plan A Date</a>
                <a href="#" class="dashboard-link" onClick={() => handlePageChange("dashboard")}>Dashboard</a>
                {Auth.loggedIn() && (<a href="#" class="logout-link" onClick={handleLogout}>Logout</a>)}
            </nav>
        </header>
    )
}

export default Nav;