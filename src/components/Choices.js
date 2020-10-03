import React from 'react';
import { connect } from 'react-redux';
import { CHOICES, PLAYER } from "../consts";
import Choice from './Choice';
import { setChoice } from "../actions";

const Choices = props => {

    const handleClick = (choice) => {
        return () =>
        {
            props.setChoice(PLAYER, {...choice});
        }
    }

    return (
        <div className='choices'>
            { CHOICES.map((choice, index) =>
                <Choice key={index} choice={choice} handleClick={handleClick(choice)} />) }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setChoice: (who, choice) => {
            dispatch(setChoice(who, choice));
        }
    }
}

export default connect(null, mapDispatchToProps)(Choices);