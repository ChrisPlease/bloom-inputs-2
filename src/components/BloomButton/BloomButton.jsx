import React from 'react';
import PropTypes from 'prop-types';

BloomButton.propTypes = {
  /** Input label */
  label: PropTypes.string,
  /** Button text */
  content: PropTypes.string.isRequired,
  /** Click handler */
  onClick: PropTypes.func.isRequired,
  /** Classname applied to the button container */
  className: PropTypes.string
};

BloomButton.defaultProps = {
  content: 'Submit',
  onClick: () => {}
};

/** @component */
export function BloomButton({className, label, content, onClick}) {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <button onClick={onClick}>{content}</button>
    </div>
  );
}
