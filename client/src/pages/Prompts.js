import React, { useState, useEffect } from 'react';
import Prompt from "../components/Prompt"

const Prompts = () => {

    const [promptNumber, setPromptNumber] = useState(0);

    const options = [
        { optionOne: "formal", optionTwo: "informal" },
        { optionOne: "outdoors", optionTwo: "indoors" },
        { optionOne: "active", optionTwo: "relaxed" },
        { optionOne: "daytime", optionTwo: "nighttime" }
    ]

    const [answers, setAnswers] = useState([]);

    return (
        <div>

            <div class="prompt-container">
                <h2>Which is your date preference?</h2>
                <Prompt answers={answers} setAnswers={setAnswers} promptNumber={promptNumber} setPromptNumber={setPromptNumber} optionOne={options[promptNumber].optionOne} optionTwo={options[promptNumber].optionTwo} />
            </div>

        </div >
    )

}

export default Prompts;