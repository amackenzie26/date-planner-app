//first the user sees the four prompts
//nav bar at top has Dashboard (replaces Plan A Date), Profile and Calendar

//prompt 1 (swipe left or right)
//prompt 2 (swipe left or right)
//prompt 3 (swipe left or right)
//prompt 4 (swipe left or right)

//three suggestions pop up that fit the criteria (horizontal cards)
//Button under the three "Show Me More Ideas"
//Reload three new cards

//Logo and Slogan still at bottom

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Date = () => {



    return (
        <div>
            <header>
                <nav>
                    <a class="dashboard-link">Dashboard</a>
                    <a class="profile-link">Profile</a>
                    <a class="calendar-link">Calendar</a>
                </nav>
            </header>

            <div class="date-prompts">
                <div class="prompt-card card">
                    <h2 class="prompt-question">What is your date preference?</h2>
                    <button class="option-one">Formal</button>
                    <button class="option-two">Informal</button>
                </div>
                <div class="prompt-card card">
                    <h2 class="prompt-question">What is your date preference?</h2>
                    <button class="option-one">Outdoor</button>
                    <button class="option-two">Indoor</button>
                </div>
                <div class="prompt-card card">
                    <h2 class="prompt-question">What is your date preference?</h2>
                    <button class="option-one">Active</button>
                    <button class="option-two">Relaxed</button>
                </div>
                <div class="prompt-card card">
                    <h2 class="prompt-question">What is your date preference?</h2>
                    <button class="option-one">Daytime</button>
                    <button class="option-two">Nighttime</button>
                </div>
            </div>

            <div class="idea-container">
                <div class="suggestion-container">
                    <h2 class="suggested-dates">Our Suggestions:</h2>
                    <div class="card suggestion-card">
                        <h3 class="activity-name">***********************************</h3>
                        <img class="activity-image">*********************************</img>
                    </div>
                    <div class="card suggestion-card">
                        <h3 class="activity-name">***********************************</h3>
                        <img class="activity-image">*********************************</img>
                    </div>
                    <div class="card suggestion-card">
                        <h3 class="activity-name">***********************************</h3>
                        <img class="activity-image">*********************************</img>
                    </div>

                </div>
                <img class="logo"></img>
                <h3 class="slogan">CATCHY SLOGAN HERE</h3>
            </div>

        </div>
    )

}

export default Date;