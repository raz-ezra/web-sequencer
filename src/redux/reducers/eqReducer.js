import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function playerReducer(state = initialState.eq, action) {
  switch (action.type) {
    case types.TOGGLE_EQ:
      return { ...state, showEQ: !state.showEQ };
    case types.CHANGE_BAND:
      return { ...state, bands: action.bands };
    case types.RESET_BANDS:
      return { ...state, bands: initialState.eq.bands };
    case types.CHANGE_ECHO:
      return { ...state, echo: action.value };
    default:
      return state;
  }
}
