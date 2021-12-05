import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Prompt from "../components/Prompt"

const Prompts = () => {

    const options = [
        { optionOne: "formal", optionTwo: "informal" },
        { optionOne: "outdoors", optionTwo: "indoors" },
        { optionOne: "active", optionTwo: "relaxed" },
        { optionOne: "daytime", optionTwo: "nighttime" }
    ]

    var prompts = [];

    for (var i = 0; i < options.length; i++) {
        prompts.push(<Prompt optionOne={options[i].optionOne} optionTwo={options[i].optionTwo} />)
    }

    return (
        <div>

            <div class="prompt-container">
                <h2>Which is your date preference?</h2>
                {prompts}
            </div>

        </div >
    )

}

export default Prompts;