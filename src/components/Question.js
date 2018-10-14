import React from 'react';
import PropTypes from 'prop-types';
import { dog, cat, bird } from './notes';


function Question(props) {
    console.log(dog, cat, bird);
    return <h2 className="question">{props.content}</h2>;
}

export default Question;