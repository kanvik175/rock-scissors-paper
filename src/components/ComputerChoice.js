import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Choice from "./Choice";
import { CHOICES, COMPUTER } from "../consts";
import { setChoice } from "../actions";

const ComputerChoice = ({ playerChoice, setChoice, computerChoice }) => {

    const generateChoice = () => {
        const choiceRandomNumber = Math.floor(Math.random() * CHOICES.length);
        return CHOICES[choiceRandomNumber];
    }

    useEffect(() => {
        const choice = generateChoice();
        if (playerChoice.name) {
            setChoice(COMPUTER, {...choice});
        }
    }, [playerChoice, setChoice])

    return (
        <div className='computer-choice'>
            <Choice choice={computerChoice} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        computerChoice: state.computerChoice,
        playerChoice: state.playerChoice
    }
}

export default connect(mapStateToProps, { setChoice })(ComputerChoice);