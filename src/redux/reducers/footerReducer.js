import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function footerReducer(state = initialState.player, action) {
  switch (action.type) {
    case types.START_PLAY:
      return { ...state, playActive: true };
    case types.STOP_PLAY:
      return { ...state, playActive: false };
    default:
      return state;
  }
}
