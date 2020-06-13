import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import css from './control.module.scss';

const Control = ({ details, handleUpdate }) => {
  const { name, value, displayText, options, error } = details;

  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (error) {
      setDisplayValue(value);
    }
  }, [error]);

  function onChange(event) {
    setDisplayValue(event.target.value);
  }

  function keyAction(event) {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  }

  return (
    <div className={css.root}>
      {name !== 'timeSigBottom' ? (
        <label htmlFor={name} className={css.label}>
          {displayText}
        </label>
      ) : (
        ''
      )}
      {name !== 'timeSigBottom' && name !== 'division' ? (
        <>
          <input
            type={displayText}
            name={name}
            value={displayValue}
            className={css.input}
            onBlur={e => {
              handleUpdate(e, details);
            }}
            onChange={e => onChange(e)}
            onKeyPress={e => {
              e.persist();
              keyAction(e);
            }}
          />
        </>
      ) : (
        <select
          value={displayValue}
          className={`${css.input} ${css[name]}`}
          onBlur={e => handleUpdate(e, details)}
          onChange={e => onChange(e)}
          onKeyPress={e => {
            e.persist();
            keyAction(e);
          }}
        >
          {options.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

Control.propTypes = {
  details: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default Control;
