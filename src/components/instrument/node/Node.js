import React from 'react';
import PropTypes from 'prop-types';

import css from './node.module.scss';

const Node = ({ value, width, id, onClick, barline, beatType, active, playActive, playSound }) => {
  if (active === 'active' && playActive && value !== 0) {
    playSound(value);
  }

  return (
    <div
      className={`${css.root} ${css['level--' + value]} ${css[barline]} ${css[beatType]} ${
        css[active]
      }`}
      style={{ maxWidth: width, fontSize: width / 1.5 > 50 ? 50 : width / 1.5 }}
      onClick={() => onClick(id, value === 3 ? 0 : value + 1)}
    ></div>
  );
};

Node.propTypes = {
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  barline: PropTypes.string.isRequired,
  beatType: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  playActive: PropTypes.bool.isRequired,
  playSound: PropTypes.func.isRequired,
};

export default Node;
