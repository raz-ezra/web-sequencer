import * as types from './actionTypes';

export function toggleEqSuccess() {
  return { type: types.TOGGLE_EQ };
}

export function changeBandsSuccess(bands) {
  return { type: types.CHANGE_BAND, bands };
}

export function resetBandsSuccess(bands) {
  return { type: types.RESET_BANDS, bands };
}

export function changeEchoSuccess(value) {
  return { type: types.CHANGE_ECHO, value };
}

export function changeBand(bands, band, value) {
  return function (dispatch) {
    let newBands = { ...bands, [band]: value };
    dispatch(changeBandsSuccess(newBands));
  };
}
