import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

BloomButton.propTypes = {
  /** Input label */
  label: PropTypes.string,
  /** Button text */
  content: PropTypes.string.isRequired,
  /** Click handler */
  onClick: PropTypes.func.isRequired
};

BloomButton.defaultProps = {
  content: 'Submit',
  onClick: () => {}
};

/** @component */
export function BloomButton({label, content, onClick}) {
  return (
    <Fragment>
      {label && <label>{label}</label>}
      <button onClick={onClick}>{content}</button>
    </Fragment>
  );
}
