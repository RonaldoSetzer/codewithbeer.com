import React from 'react';
import styled from 'styled-components';

import { FilesEmpty } from 'styled-icons/icomoon';
import { Search } from 'styled-icons/boxicons-regular';
import { LabFlask } from 'styled-icons/entypo';
import { ColorPaletteOutline } from 'styled-icons/evaicons-outline';

const Container = styled.aside`
  background: #2a2e3d;
  width: 400px;
  display: flex;
  min-height: 100vh;
  width: 400px;
`;

const IconsContainer = styled.div`
  background: #282d3c;
  width: 50px;
  display: flex;
  flex-direction: column;
`;

function SideMenu() {
  return (
    <Container>
      <IconsContainer>
        <FilesEmpty style={{ color: '#ebf7f8' }} size={42} margin={20} />
        <Search style={{ color: '#717983' }} size={42} />
        <LabFlask style={{ color: '#717983' }} size={42} />
        <ColorPaletteOutline style={{ color: '#717983' }} size={42} />
      </IconsContainer>
      menu
    </Container>
  );
}

export default SideMenu;
