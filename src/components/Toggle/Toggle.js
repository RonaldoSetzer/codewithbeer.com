import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icons/ListIcons';

export const Button = styled.a`
  cursor: pointer;

  svg {
    padding: 0.2rem;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px;

    color: var(--primary);
  }
`;

function Toggle({ handleToggle, mode }) {
  const { ToggleOn, ToggleOff } = Icon;

  return (
    <Button onClick={handleToggle}>
      {mode ? <ToggleOn /> : <ToggleOff />}
    </Button>
  );
}

Toggle.propTypes = {
  mode: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Toggle;
