import React from 'react';
import { connect } from 'react-redux';
import { COMPUTER, PLAYER } from "../consts";

const ScoreBoard = ({ computerScore, playerScore }) => {

    return (
        <div className='score-board'>
            {computerScore} : {playerScore}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        computerScore: state.score[COMPUTER],
        playerScore: state.score[PLAYER]
    }
}

export default connect(mapStateToProps)(ScoreBoard);