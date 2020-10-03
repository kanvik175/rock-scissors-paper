import { SET_NAME, SET_STATUS, SET_CHOICE, ADD_PHRASE, RESET } from './actionTypes';

const setName = (name) => ({
    type: SET_NAME,
    payload: {
        name
    }
})

const setStatus = (status) => ({
    type: SET_STATUS,
    payload: {
        status
    }
})

const setChoice = (who, choice) => {
    return {
        type: SET_CHOICE,
        payload: {
            who,
            choice
        }
    }
}

const addPhrase = (type, id) => {
    return {
        type: ADD_PHRASE,
        payload: {
            id,
            type
        }
    }
}

const reset = () => {
    return {
        type: RESET
    }
}

export { setName, setStatus, setChoice, addPhrase, reset };