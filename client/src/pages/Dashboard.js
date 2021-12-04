import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {



    return (
        <div>
            <header>
                <nav class='app-nav'>
                    <a class="plan-link">Plan A Date make href</a>
                    <a class="calendar-link">My Calendar</a>
                </nav>
            </header>

            <div class="dashboard-container">
                <div class="favorites-container">
                    <h2 class="favorites">Favorites</h2>
                    <div class="card favorites-card">

                    </div>
                </div>
                <img class="logo"></img>
                <h3 class="slogan">CATCHY SLOGAN HERE</h3>
            </div>

        </div>
    )

}

export default Dashboard;