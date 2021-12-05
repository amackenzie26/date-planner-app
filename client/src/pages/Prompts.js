import React, { useState } from 'react';
import Prompt from "../components/Prompt"

const Prompts = () => {

    const [promptNumber, setPromptNumber] = useState(0);

    // const options = [
    //     { optionOne: "formal", optionTwo: "informal" },
    //     { optionOne: "outdoors", optionTwo: "indoors" },
    //     { optionOne: "active", optionTwo: "relaxed" },
    //     { optionOne: "daytime", optionTwo: "nighttime" }
    // ]

    const options = [
        [ 
            {name: "formal", backgroundImage: 'https://i.insider.com/5acbcd3f7708e94b4d7e47e4?width=600&format=jpeg&auto=webp'},
            {name: "informal", backgroundImage: 'https://www.lovepanky.com/wp-content/uploads/2019/10/casual-first-date-ideas.jpg'} 
        ],
        [ 
            {name: "outdoors", backgroundImage: 'https://kitschmix.com/wp-content/uploads/2017/02/D430_22_155_0004_600.jpg'},
            {name: "indoors", backgroundImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-best-relationships-love-without-restriction-royalty-free-image-1585773799.jpg'} 
        ],
        [ 
            {name: "active", backgroundImage: 'https://cdn.prod.openfit.com/uploads/2019/01/25130719/Active-Date-Ideas-1.jpg'},
            {name: "relaxed", backgroundImage: 'https://coupletraveltheworld.com/wp-content/uploads/2020/04/couple-board-games-scaled.jpg'} 
        ],
        [ 
            {name: "daytime", backgroundImage: 'https://images.ctfassets.net/iyiurthvosft/featured-img-of-post-196838/63f5c7cdb0a5e079638e4f019e6dd326/featured-img-of-post-196838.jpg?fm=jpg&fl=progressive&q=50&w=1200'},
            {name: "nighttime", backgroundImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/atargazing-1625217059.jpg'} 
        ],

    ]
    const [answers, setAnswers] = useState([]);

    return (
        <div>

            <div class="prompt-container">
                <h2>Which is your date preference?</h2>
                <Prompt answers={answers} setAnswers={setAnswers} promptNumber={promptNumber} setPromptNumber={setPromptNumber} optionOne={options[promptNumber][0]} optionTwo={options[promptNumber][1]} />
            </div>

        </div >
    )

}

export default Prompts;