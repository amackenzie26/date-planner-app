import React, { } from 'react';
import { useHistory } from 'react-router';

const Prompt = (props) => {

    const history = useHistory();
    const handleButton = (e) => {
        props.setAnswers([...props.answers, e.target.getAttribute("data-option")])

        if (props.promptNumber + 1 > 3) {
            history.push({ pathname: "/Suggestions", state: props.answers })
        } else {
            props.setPromptNumber(props.promptNumber + 1);
        }
    }

    return (
        <div class="prompt-card card">
            <button onClick={handleButton} class="option-one" data-option={props.optionOne} >{props.optionOne}</button>
            <button onClick={handleButton} class="option-two" data-option={props.optionTwo}>{props.optionTwo}</button>
        </div>
    )
}

export default Prompt;