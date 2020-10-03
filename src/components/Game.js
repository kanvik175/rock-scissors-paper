import React from 'react';
import { connect } from 'react-redux';
import { MAX_POINT_NUM } from "../consts";
import Choices from "./Choices";
import ComputerChoice from "./ComputerChoice";
import Result from "./Result";
import ScoreBoard from "./ScoreBoard";
import Phrases from "./Phrases";
import ResultWindow from "./ResultWindow";

const Game = ({ score }) => {

    const isGameEnd = () => {
        return Object.values(score).includes(MAX_POINT_NUM);
    }

    return (
        <div className='game'>
            {
                !isGameEnd() ?
                    <>
                        <Choices />
                        <ComputerChoice />
                        <ScoreBoard />
                        <Result />
                        <Phrases />
                    </> :
                    <ResultWindow />
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

export default connect(mapStateToProps)(Game);