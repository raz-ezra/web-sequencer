import * as types from './actionTypes';

export function updateNodeSuccess(name, nodes) {
  return { type: types.UPDATE_NODE, name, nodes };
}

export function updateNodesArraySuccess(name, nodes) {
  return { type: types.UPDATE_NODES_ARRAY, name, nodes };
}

export function updateSoundSuccess(name, sound) {
  return { type: types.UPDATE_SOUND, name, sound };
}

export function updateNode(name, nodes, node, value) {
  return function (dispatch) {
    const newNodes = nodes.slice();
    newNodes[node] = value;
    return dispatch(updateNodeSuccess(name, newNodes));
  };
}

export function updateNodesArray(instrument, numOfNodes) {
  return function (dispatch) {
    const name = instrument.name;
    let newNodes = instrument.nodes.slice();
    if (newNodes.length > numOfNodes) {
      newNodes = newNodes.slice(0, numOfNodes);
    } else if (newNodes.length < numOfNodes) {
      for (let i = newNodes.length; i < numOfNodes; i++) {
        newNodes.push(0);
      }
    }
    return dispatch(updateNodeSuccess(name, newNodes));
  };
}

export function updateSound(name, newSound) {
  return function (dispatch) {
    dispatch(updateSoundSuccess(name, newSound));
  };
}
