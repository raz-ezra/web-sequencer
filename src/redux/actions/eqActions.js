import * as types from './actionTypes';

export function toggleEqSuccess() {
  return { type: types.TOGGLE_EQ };
}

export function changeBandsSuccess(bands) {
  return { type: types.CHANGE_BAND, bands };
}

export function changeBand(bands, band, value) {
  return function (dispatch) {
    let newBands = { ...bands, [band]: value };
    dispatch(changeBandsSuccess(newBands));
  };
}
