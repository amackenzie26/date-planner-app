import React, { } from 'react';
import { useHistory } from 'react-router';

const Prompt = (props) => {

    const history = useHistory();

    const handleButton = (e) => {
        props.setAnswers([...props.answers, e.target.getAttribute("data-option")])

        if (props.promptNumber + 1 > 3) {
            history.push({ pathname: "/Suggestions", state: [...props.answers, e.target.getAttribute("data-option")] })
        } else {
            props.setPromptNumber(props.promptNumber + 1);
        }
    }

    return (
        <div class="prompt-card card">
            <button style={{backgroundImage: 'url(' + props.optionOne.backgroundImage + ')'}} onClick={handleButton} class="option-one" data-option={props.optionOne.name}>{props.optionOne.name}</button>
            <button style={{backgroundImage: 'url(' + props.optionTwo.backgroundImage + ')'}} onClick={handleButton} class="option-two" data-option={props.optionTwo.name}>{props.optionTwo.name}</button>
        </div>
    )
}

export default Prompt;