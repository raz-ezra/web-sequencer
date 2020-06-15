export default {
  player: {
    playActive: false,
  },
  eq: {
    showEQ: false,
    bands: {
      '32': 0,
      '64': 0,
      '128': 0,
      '256': 0,
      '512': 0,
      '1k': 0,
      '2k': 0,
      '4k': 0,
      '8k': 0,
      '16k': 0,
    },
    echo: 0,
  },
  settings: {
    tempo: { value: 120, displayText: 'Tempo', name: 'tempo', maxChars: 3 },
    timeSigTop: {
      value: 4,
      displayText: 'Time Signature',
      name: 'timeSigTop',
    },
    timeSigBottom: {
      value: 4,
      displayText: 'Time Signature',
      name: 'timeSigBottom',
      options: [2, 4, 8],
    },
    division: { value: 8, displayText: 'Division', name: 'division', options: [4, 8, 16] },
    bars: { value: 2, displayText: 'Bars', name: 'bars' },
    numOfNodes: 16,
    sound: 'kit1',
  },
  instruments: {
    '1': {
      name: '1',
      nodes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sound: 70,
    },
    '2': {
      name: '2',
      nodes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sound: 80,
    },
    '3': {
      name: '3',
      nodes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sound: 75,
    },
    '4': {
      name: '4',
      nodes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sound: 40,
    },
    '5': {
      name: '5',
      nodes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sound: 55,
    },
    '6': {
      name: '6',
      nodes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sound: 35,
    },
    '7': {
      name: '7',
      nodes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sound: 15,
    },
    '8': {
      name: '8',
      nodes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sound: 0,
    },
  },
};
