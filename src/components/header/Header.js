import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSettings } from '../../redux/actions/settingsActions';
import { toggleEqSuccess } from '../../redux/actions/eqActions';

import Control from './control/Control';

import css from './header.module.scss';

const Header = ({ settings, updateSettings, toggleEqSuccess, showEQ }) => {
  const { tempo, division, bars, timeSigTop, timeSigBottom } = settings;

  function handleUpdate(event, details) {
    updateSettings(event, details);
  }

  return (
    <div className={css.root}>
      <Control details={tempo} handleUpdate={handleUpdate} />
      <Control details={division} handleUpdate={handleUpdate} controlStyle={{ width: 200 }} />
      <Control details={bars} handleUpdate={handleUpdate} />
      <Control details={timeSigTop} handleUpdate={handleUpdate} />
      <div className={css.divider}>{'/'}</div>
      <Control details={timeSigBottom} handleUpdate={handleUpdate} />
      <div className={css.eq}>
        <label htmlFor='eq'>Show EQ</label>
        <input type='checkbox' checked={showEQ} id='eq' onChange={() => toggleEqSuccess()} />
      </div>
    </div>
  );
};

Header.propTypes = {
  settings: PropTypes.object.isRequired,
  updateSettings: PropTypes.func.isRequired,
  toggleEqSuccess: PropTypes.func.isRequired,
  showEQ: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    settings: state.settings,
    showEQ: state.eq.showEQ,
  };
}

const mapDispatchToProps = {
  updateSettings,
  toggleEqSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
