import React from 'react';
import { useHistory } from 'react-router-dom';

const Suggestion = (props) => {

    const history = useHistory();

    const handleSuggestion = () => {
        history.push(`/suggestions/${props.sugg._id}`)
    }

    return (
        <div class="suggestion-card">
            <button class="suggestion-button" key={props.sugg._id} onClick={handleSuggestion}>{props.sugg.name}</button>
        </div>
    )
}

export default Suggestion;