import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeBand, resetBandsSuccess, changeEchoSuccess } from '../../../redux/actions/eqActions';

import css from './eq.module.scss';

const EQ = ({ bands, changeBand, resetBandsSuccess, echo, changeEchoSuccess }) => {
  return (
    <div className={css.root}>
      <div className={css.eqBands}>
        {Object.keys(bands).map(band => {
          return (
            <div className={css.band} key={band}>
              <label htmlFor={band}>{band}</label>
              <input
                type='range'
                id={band}
                min='-6'
                max='6'
                orient='vertical'
                value={bands[band]}
                onChange={e => changeBand(bands, band, parseInt(e.target.value))}
              />
              <p>{bands[band]}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => resetBandsSuccess()} className={css.eqReset}>
        Reset EQ
      </button>
      <div className={css.echo}>
        <label htmlFor='echo'>Echo Level</label>
        <input
          type='range'
          min='-6'
          max='6'
          value={echo}
          onChange={e => changeEchoSuccess(parseInt(e.target.value))}
        />
        <p>{echo}</p>
        <button onClick={() => changeEchoSuccess(0)} className={css.echoReset}>
          Reset Echo
        </button>
      </div>
    </div>
  );
};

EQ.propTypes = {
  bands: PropTypes.object.isRequired,
  changeBand: PropTypes.func.isRequired,
  resetBandsSuccess: PropTypes.func.isRequired,
  changeEchoSuccess: PropTypes.func.isRequired,
  echo: PropTypes.number.isRequired,
};

function mapsStateToProps({ eq }) {
  return {
    bands: eq.bands,
    echo: eq.echo,
  };
}

const mapDispatchToProps = {
  changeBand,
  resetBandsSuccess,
  changeEchoSuccess,
};

export default connect(mapsStateToProps, mapDispatchToProps)(EQ);
