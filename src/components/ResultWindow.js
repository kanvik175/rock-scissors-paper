import React from 'react';
import { connect } from 'react-redux';
import { PLAYER, MAX_POINT_NUM, FINAL_LOSE_PHRASE, FINAL_WIN_PHRASE } from "../consts";
import { reset } from "../actions";

const ResultWindow = ({ isWinner, reset }) => {

    const handleClick = () => {
        reset();
    }

    return (
        <div className='result-window'>
            <div className='final-phrase'>{isWinner ? FINAL_WIN_PHRASE : FINAL_LOSE_PHRASE}</div>
            <button className='reset-button' onClick={handleClick}>Начать заново</button>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        isWinner: state.score[PLAYER] === MAX_POINT_NUM
    }
}

export default connect(mapStateToProp, { reset })(ResultWindow);