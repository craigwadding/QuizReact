import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
    return (
        <li className="answerOption">
            <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                checked={true}
                id={props.answerType}
                value={props.answerType}
                disabled={false}
                onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}


export default AnswerOption;