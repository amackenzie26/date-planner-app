import React, { useState, useEffect } from 'react';

const Suggestion = (props) => {

    return (
        <div class="prompt-card card">
            <h2 class="prompt-question">{props.question}</h2>
            <button class="option-one">{props.answerOne}</button>
            <button class="option-two">{props.answerTwo}</button>
        </div>
    )
}

export default Suggestion;