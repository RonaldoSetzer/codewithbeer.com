import React, { useState } from 'react';
import styled from 'styled-components';

import Icon from '../Icons/ListIcons';

export const Button = styled.a`
  cursor: pointer;
  color: var(--font-default);
  font-size: 100%;

  svg {
    padding: 0.2rem;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px;

    color: var(--font-colorful);
  }
`;

function Toggle() {
  const [toggle, setToggle] = useState(true);
  const { ToggleOn, ToggleOff } = Icon;
  const handleToggle = e => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <Button onClick={handleToggle}>
      {toggle ? <ToggleOn /> : <ToggleOff />}
    </Button>
  );
}

export default Toggle;
