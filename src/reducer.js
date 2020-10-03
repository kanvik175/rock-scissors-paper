import { SET_NAME, SET_STATUS, SET_CHOICE, ADD_PHRASE, RESET } from './actionTypes';
import { COMPUTER, PLAYER, STATUS } from "./consts";

const initialState = {
   name: '',
   score: {
      [COMPUTER]: 0,
      [PLAYER]: 0
   },
   lastStatus: '',
   computerChoice: '',
   playerChoice: '',
   usedLosePhrases: [],
   usedWinPhrases: [],
}

const rootReducer = (state = initialState, action) => {
   switch(action.type) {
      case SET_NAME:
         return {
            ...state,
            name: action.payload.name
         }
      case SET_STATUS:
         const score = {
            ...state.score
         }

         if (action.payload.status === STATUS.WIN) {
            score[PLAYER]++;
         } else if (action.payload.status === STATUS.LOSE) {
            score[COMPUTER]++;
         }

         return {
            ...state,
            lastStatus: action.payload.status,
            score
         }
      case SET_CHOICE:
         return {
            ...state,
            [`${action.payload.who}Choice`]: action.payload.choice
         }
      case ADD_PHRASE:
         let type = action.payload.type;
         if (Object.values(STATUS).includes(type)) {
            type = type.charAt(0).toUpperCase() + type.slice(1);
            const propertyName = `used${type}Phrases`;
            return {
               ...state,
               [propertyName]: [...state[propertyName], action.payload.id]
            }
         } else {
            return state;
         }
      case RESET:
         return initialState;
      default:
         return state;
   }
}

export default rootReducer;