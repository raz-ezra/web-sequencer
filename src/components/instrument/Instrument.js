import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Node from './node/Node';
import { updateNode, updateNodesArray, updateSound } from '../../redux/actions/instrumentActions';

import css from './instruments.module.scss';

const nameWidth = 150;
const gridWidth = screen.width - nameWidth;

const Instrument = ({
  name,
  instrument,
  updateNode,
  nodesPerBar,
  numOfNodes,
  updateNodesArray,
  nodesPerBeat,
  activeNode,
  playActive,
  drumsList,
  midiSounds,
  updateSound,
}) => {
  const [sound, setSound] = useState(instrument.sound);
  let strongBeat = false;

  useEffect(() => {
    updateNodesArray(instrument, numOfNodes);
  }, [numOfNodes]);

  useEffect(() => {
    setSound(instrument.sound);
    midiSounds.cacheDrum(instrument.sound);
  }, [instrument.sound]);

  function handleClick(node, value) {
    updateNode(name, instrument.nodes, node, value);
  }

  function updateValue(event) {
    let value = parseInt(event.target.value);
    updateSound(instrument.name, value);
  }

  function playSound(velocity) {
    let volume = ((velocity - 1) * (1 - 0.3)) / (3 - 1) + 0.3;
    midiSounds.setDrumVolume(sound, volume);
    midiSounds.playDrumsNow([sound]);
  }

  return (
    <div className={css.root}>
      <div className={css.name} style={{ width: nameWidth }}>
        <select value={sound} onChange={e => updateValue(e)}>
          {drumsList.length !== 0
            ? drumsList.map((drums, i) => {
                if (i % 5 === 0) {
                  return (
                    <option key={i} value={i}>
                      {midiSounds.player.loader.drumInfo(i).title}
                    </option>
                  );
                }
              })
            : ''}
        </select>
      </div>
      {instrument.nodes.map((node, i) => {
        strongBeat =
          (i % nodesPerBar) % nodesPerBeat === 0 || nodesPerBeat === 1 ? !strongBeat : strongBeat;
        return (
          <Node
            key={i}
            id={i}
            value={node}
            width={gridWidth / numOfNodes}
            onClick={handleClick}
            barline={(i + 1) % nodesPerBar === 0 ? 'showBarLine' : 'dontShowBarLine'}
            beatType={strongBeat ? 'strongBeat' : 'weakBeat'}
            active={i === activeNode ? 'active' : 'notActive'}
            playActive={playActive}
            playSound={playSound}
          />
        );
      })}
    </div>
  );
};

Instrument.propTypes = {
  instrument: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  updateNode: PropTypes.func.isRequired,
  nodesPerBar: PropTypes.number.isRequired,
  numOfNodes: PropTypes.number.isRequired,
  updateNodesArray: PropTypes.func.isRequired,
  nodesPerBeat: PropTypes.number.isRequired,
  activeNode: PropTypes.number.isRequired,
  playActive: PropTypes.bool.isRequired,
  drumsList: PropTypes.array.isRequired,
  midiSounds: PropTypes.object.isRequired,
  updateSound: PropTypes.func.isRequired,
};

function mapsStateToProps({ instruments, settings }, ownProps) {
  const instrument = instruments[ownProps.name];
  const numOfNodes = settings.numOfNodes;
  const bars = settings.bars;
  const nodesPerBar = numOfNodes / bars.value;
  const nodesPerBeat =
    settings.timeSigBottom.value !== 8
      ? settings.division.value / settings.timeSigBottom.value
      : settings.timeSigTop.value !== 3 &&
        (settings.timeSigBottom.value / settings.timeSigTop.value) % 2 === 0
      ? settings.division.value / settings.timeSigBottom.value
      : settings.timeSigTop.value === 3
      ? settings.division.value / settings.timeSigBottom.value
      : (3 * settings.division.value) / settings.timeSigBottom.value;
  return {
    instrument,
    nodesPerBar,
    numOfNodes,
    nodesPerBeat,
  };
}

const mapDispatchToProps = {
  updateNode,
  updateNodesArray,
  updateSound,
};

export default connect(mapsStateToProps, mapDispatchToProps)(Instrument);
