import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function headerReducer(state = initialState.settings, action) {
  switch (action.type) {
    case types.UPDATE_SETTINS: {
      const { division, bars, timeSigTop, timeSigBottom } = state;
      let numOfNodes = 0;
      switch (action.name) {
        case 'bars':
          numOfNodes = getNumOfNodes(
            division.value,
            action.details.value,
            timeSigTop.value,
            timeSigBottom.value
          );
          break;
        case 'division':
          numOfNodes = getNumOfNodes(
            action.details.value,
            bars.value,
            timeSigTop.value,
            timeSigBottom.value
          );
          break;
        case 'timeSigTop':
          numOfNodes = getNumOfNodes(
            division.value,
            bars.value,
            action.details.value,
            timeSigBottom.value
          );
          break;
        case 'timeSigBottom':
          numOfNodes = getNumOfNodes(
            division.value,
            bars.value,
            timeSigTop.value,
            action.details.value
          );
          break;
        default:
          numOfNodes = getNumOfNodes(
            division.value,
            bars.value,
            timeSigTop.value,
            timeSigBottom.value
          );
      }

      return {
        ...state,
        [action.name]: { ...action.details },
        numOfNodes,
      };
    }
    default:
      return state;
  }
}

function getNumOfNodes(division, bars, timeSigTop, timeSigBottom) {
  return (division / timeSigBottom) * timeSigTop * bars;
}
