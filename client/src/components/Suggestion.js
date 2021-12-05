import React, { useState, useEffect } from 'react';

const Suggestion = (props) => {

    return (
        <div class="suggestion-card card">
            <button class="option-one">{props.suggestion}</button>
        </div>
    )
}

export default Suggestion;