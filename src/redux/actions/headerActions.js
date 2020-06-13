import * as types from './actionTypes';
import { toast } from 'react-toastify';

export function updateSettingsAction(details, name) {
  return { type: types.UPDATE_SETTINS, details, name };
}

export function updateSettings(event, details) {
  return function (dispatch) {
    const value = parseInt(event.target.value);
    const name = details.name;
    let newSetting = {};

    if (name === 'tempo' && value > 220) {
      newSetting = { ...details, error: true };
      toast.error('Max Tempo is 220bpm');
      return dispatch(updateSettingsAction(newSetting, name));
    } else if (name === 'bars' && value > 4) {
      newSetting = { ...details, error: true };
      toast.error('Max bars is 4');
      return dispatch(updateSettingsAction(newSetting, name));
    } else if (name === 'timeSigTop' && value > 12) {
      newSetting = { ...details, error: true };
      toast.error('Max upper time signature is 12');
      return dispatch(updateSettingsAction(newSetting, name));
    } else {
      newSetting = { ...details, value, error: false };
      return dispatch(updateSettingsAction(newSetting, name));
    }
  };
}
