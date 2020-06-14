import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { startPlay, stopPlay } from '../../redux/actions/playerActions';

import css from './footer.module.scss';

const Footer = ({ buttonBehaviour, startPlay, stopPlay, playActive }) => {
  useEffect(() => {}, [playActive]);

  function togglePlay() {
    if (!playActive) {
      startPlay();
    } else {
      stopPlay();
    }
  }

  return (
    <div className={css.root}>
      <div className={css[buttonBehaviour]} onClick={() => togglePlay()}></div>
      <KeyboardEventHandler handleKeys={['Space']} onKeyEvent={() => togglePlay()} />
    </div>
  );
};

Footer.propTypes = {
  buttonBehaviour: PropTypes.string.isRequired,
  startPlay: PropTypes.func.isRequired,
  stopPlay: PropTypes.func.isRequired,
  playActive: PropTypes.bool.isRequired,
};

function mapStateToProps({ settings, player }) {
  const { tempo, timeSigBottom, division } = settings;
  return {
    tempo: (60000 / tempo.value) * (timeSigBottom.value / division.value),
    buttonBehaviour: player.playActive ? 'stop' : 'play',
    playActive: player.playActive,
  };
}

const mapDispatchToProps = {
  startPlay,
  stopPlay,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
