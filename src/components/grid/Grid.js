import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MIDISounds from 'midi-sounds-react';

import Instrument from '../instrument/Instrument';
import EQ from './eq/EQ';

import css from './grid.module.scss';

let playTimer;

const Grid = ({ instruments, playActive, tempo, numOfNodes, showEQ, bands, echo }) => {
  const [drumsList, setDrumsList] = useState([]);
  const [midiSounds, setMidiSounds] = useState(null);
  const [playPosition, setPlayPosition] = useState(-1);

  useEffect(() => {
    if (midiSounds && drumsList.length === 0) {
      setDrumsList(midiSounds.player.loader.drumKeys());
      midiSounds.cacheDrum;
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

  useEffect(() => {
    if (midiSounds) {
      midiSounds.setBand32(bands['32']);
      midiSounds.setBand64(bands['64']);
      midiSounds.setBand128(bands['128']);
      midiSounds.setBand256(bands['256']);
      midiSounds.setBand512(bands['512']);
      midiSounds.setBand1k(bands['1k']);
      midiSounds.setBand2k(bands['2k']);
      midiSounds.setBand4k(bands['4k']);
      midiSounds.setBand8k(bands['8k']);
      midiSounds.setBand16k(bands['16k']);
      midiSounds.setEchoLevel(echo);
    }
  }, [bands, echo, midiSounds]);

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
      {midiSounds && showEQ ? <EQ /> : ''}
      <MIDISounds ref={ref => setMidiSounds(ref)} appElementName='app' />
    </div>
  );
};

Grid.propTypes = {
  instruments: PropTypes.object.isRequired,
  playActive: PropTypes.bool.isRequired,
  tempo: PropTypes.number.isRequired,
  numOfNodes: PropTypes.number.isRequired,
  showEQ: PropTypes.bool.isRequired,
  bands: PropTypes.object.isRequired,
  echo: PropTypes.number.isRequired,
};

function mapsStateToProps({ instruments, player, settings, eq }) {
  return {
    instruments,
    playActive: player.playActive,
    tempo:
      (60000 / settings.tempo.value) * (settings.timeSigBottom.value / settings.division.value),
    numOfNodes: settings.numOfNodes,
    showEQ: eq.showEQ,
    bands: eq.bands,
    echo: eq.echo,
  };
}

const mapDispatchToProps = {};

export default connect(mapsStateToProps, mapDispatchToProps)(Grid);
