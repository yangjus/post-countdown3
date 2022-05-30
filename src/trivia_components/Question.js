import React, {useState} from "react";
import {decode} from 'html-entities';
import 'randomize-array';
import Button from '@mui/material/Button';

const Question = (props) => {

    const choices = [{
        "answer": props.correct,
        "correct": true
    },
    {
        "answer": props.incorrect[0],
        "correct": false
    },
    {
        "answer": props.incorrect[1],
        "correct": false
    },
    {
        "answer": props.incorrect[2],
        "correct": false
    }]

    const randomize = require('randomize-array');
    const shuffledChoices = randomize(choices);

    const [pressed, setPressed] = useState(false);
    const [disable, setDisable] = useState(false);
    const [right, setRight] = useState(false);

    return (
        <>
        <h3>{decode(props.content)}</h3>
        {shuffledChoices.map(choice => <Button variant="contained" disabled={disable} onClick={() => 
                {setPressed(true); setDisable(true); setRight(choice.correct)}}>{decode(choice.answer)}</Button>)}
        {pressed && right && <h4>You are correct!</h4>}
        {pressed && !right && <h4>You are incorrect!</h4>}
        </>
    );
}

export default Question;