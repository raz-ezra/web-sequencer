import * as types from './actionTypes';

export function startPlaySuccess() {
  return { type: types.START_PLAY };
}

export function stopPlaySuccess() {
  return { type: types.STOP_PLAY };
}

export function startPlay() {
  return function (dispatch) {
    dispatch(startPlaySuccess());
  };
}

export function stopPlay() {
  return function (dispatch) {
    dispatch(stopPlaySuccess());
  };
}
