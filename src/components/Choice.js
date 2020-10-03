import React from 'react';

const Choice = props => {

    return (
        <div
            className={`choice ${props.choice && props.choice.name ? `choice-${props.choice.name}` : ''} ${props.handleClick && 'pointer'}`}
            onClick={props.handleClick ? props.handleClick : () => {}}
        />
    )
}

export default Choice;