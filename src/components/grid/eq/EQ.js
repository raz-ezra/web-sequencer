import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeBand } from '../../../redux/actions/eqActions';

import css from './eq.module.scss';

const EQ = ({ bands, changeBand }) => {
  return (
    <div className={css.root}>
      {Object.keys(bands).map(band => {
        return (
          <div className={css.band} key={band}>
            <label htmlFor={band}>{band}</label>
            <input
              type='range'
              min='-6'
              max='6'
              orient='vertical'
              value={bands[band]}
              onChange={e => changeBand(bands, band, e.target.value)}
            />
            <p>{bands[band]}</p>
          </div>
        );
      })}
    </div>
  );
};

EQ.propTypes = {
  bands: PropTypes.object.isRequired,
  changeBand: PropTypes.func.isRequired,
};

function mapsStateToProps({ eq }) {
  return {
    bands: eq.bands,
  };
}

const mapDispatchToProps = {
  changeBand,
};

export default connect(mapsStateToProps, mapDispatchToProps)(EQ);
