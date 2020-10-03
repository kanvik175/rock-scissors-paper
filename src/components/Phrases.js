import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LOSE_PHRASES, WIN_PHRASES, STATUS } from "../consts";
import { addPhrase } from "../actions";

const Phrases = ({ lastStatus, usedLosePhrases, usedWinPhrases, score, addPhrase }) => {

    let phrases = [];
    let usedPhrases = [];

    const [phrase, setPhrase] = useState('');

    if (lastStatus === STATUS.WIN) {
        phrases = WIN_PHRASES;
        usedPhrases = usedWinPhrases
    } else if(lastStatus === STATUS.LOSE) {
        phrases = LOSE_PHRASES;
        usedPhrases = usedLosePhrases;
    }

    const generateUniqueNum = () => {
        while(true) {
            const id = Math.floor(Math.random() * phrases.length);
            if (!usedPhrases.includes(id)) {
                addPhrase(lastStatus, id);
                return id;
            }
        }
    }

    const generatePhrase = () => {
        const uniqueNum = generateUniqueNum();
        return phrases[uniqueNum];
    }

    useEffect(() => {
        if (lastStatus !== STATUS.DRAW) {
            setPhrase(generatePhrase())
        } else {
            setPhrase('');
        }
    }, [score])

    return (
        <div className='phrase'>
            {phrase}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        lastStatus: state.lastStatus,
        usedLosePhrases: state.usedLosePhrases,
        usedWinPhrases: state.usedWinPhrases,
        score: state.score
    }
}

export default connect(mapStateToProps, { addPhrase })(Phrases);