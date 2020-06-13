import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MIDISounds from 'midi-sounds-react';

import Instrument from '../instrument/Instrument';

import css from './grid.module.scss';

let playTimer;

const Grid = ({ instruments, playActive, tempo, numOfNodes }) => {
  const [drumsList, setDrumsList] = useState([]);
  const [midiSounds, setMidiSounds] = useState(null);
  const [playPosition, setPlayPosition] = useState(-1);

  useEffect(() => {
    if (midiSounds && drumsList.length === 0) {
      setDrumsList(midiSounds.player.loader.drumKeys());
      midiSounds.player.loader.waitLoad;
    }
  }, [midiSounds]);

  useEffect(() => {
    if (playActive) {
      playTimer = setTimeout(() => {
        movePlayHead();
      }, tempo);
    } else {
      clearInterval(playTimer);
      setPlayPosition(-1);
    }
  }, [playActive, playPosition]);

  function movePlayHead() {
    let newPlayPosition = playPosition === numOfNodes - 1 ? 0 : playPosition + 1;
    setPlayPosition(newPlayPosition);
  }

  return (
    <div className={css.root}>
      {midiSounds
        ? Object.keys(instruments).map(instrument => {
            return (
              <Instrument
                key={instrument}
                name={instrument}
                drumsList={drumsList}
                midiSounds={midiSounds}
                playActive={playActive}
                activeNode={playPosition}
              />
            );
          })
        : ''}
      <MIDISounds ref={ref => setMidiSounds(ref)} appElementName='app' />
    </div>
  );
};

function mapsStateToProps({ instruments, player, settings }) {
  return {
    instruments,
    playActive: player.playActive,
    tempo:
      (60000 / settings.tempo.value) * (settings.timeSigBottom.value / settings.division.value),
    numOfNodes: settings.numOfNodes,
  };
}

Grid.propTypes = {
  instruments: PropTypes.object.isRequired,
  playActive: PropTypes.bool.isRequired,
  tempo: PropTypes.number.isRequired,
  numOfNodes: PropTypes.number.isRequired,
};

const mapDispatchToProps = {};

export default connect(mapsStateToProps, mapDispatchToProps)(Grid);
