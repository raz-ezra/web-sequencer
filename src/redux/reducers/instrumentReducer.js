import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function instrumentReducer(state = initialState.instruments, action) {
  switch (action.type) {
    case types.UPDATE_NODE: {
      let newInstrument = { ...state[action.name], nodes: action.nodes };
      return { ...state, [action.name]: newInstrument };
    }
    case types.UPDATE_SOUND: {
      let newInstrument = { ...state[action.name], sound: action.sound };
      return { ...state, [action.name]: newInstrument };
    }
    default:
      return state;
  }
}
