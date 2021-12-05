import React from 'react';

const Suggestion = (props) => {

    return (
        <div class="suggestion-card card">
            <button class="option">{props.sugg.name}</button>
        </div>
    )
}

export default Suggestion;