import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setStatus } from "../actions";
import { STATUS } from "../consts";

const Result = ({ playerChoice, computerChoice, setStatus }) => {

    const [result, setResult] = useState('');


    useEffect(() => {
        const getResult = () => {
            if (playerChoice.loseTo === computerChoice.name) {
                setStatus(STATUS.LOSE);
                return 'Ты проиграл';
            } else if (playerChoice.name === computerChoice.name) {
                setStatus(STATUS.DRAW);
                return 'Ничья';
            } else {
                setStatus(STATUS.WIN);
                return 'Ты выиграл';
            }
        }

        if (computerChoice !== '') {
            setResult(getResult());
        }
    }, [computerChoice, setResult, playerChoice, setStatus]);

    return (
        <div className='result'>
            {result}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        computerChoice: state.computerChoice,
        playerChoice: state.playerChoice
    }
}

export default connect(mapStateToProps, { setStatus })(Result);