import React, { useState, useEffect } from 'react';

const Prompt = (props) => {

    return (
        <div class="prompt-card card">
            <button class="option-one">{props.optionOne}</button>
            <button class="option-two">{props.optionTwo}</button>
        </div>
    )
}

export default Prompt;