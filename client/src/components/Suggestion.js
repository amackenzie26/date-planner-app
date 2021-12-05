import React from 'react';

const Suggestion = (props) => {

    return (
        <div class="suggestion-card card">
            <button class="option-one">{props.sugg.name}</button>
        </div>
    )
}

export default Suggestion;