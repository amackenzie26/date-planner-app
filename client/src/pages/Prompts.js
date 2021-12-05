import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Prompt from "../components/Prompt"

const Prompts = () => {

    const options = {
        "promptOne": ["formal", "informal"],
        "promptTwo": ["outdoors", "indoors"],
        "promptThree": ["active", "relaxed"],
        "promptFour": ["daytime", "nighttime"]
    }
    return (
        <div>

            <div class="prompt-container">
                <h2>Which is your date preference?</h2>
                <Prompt></Prompt>
            </div>

        </div >
    )

}

export default Prompts;