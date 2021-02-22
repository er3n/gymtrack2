import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const LogoContainer = styled(View)`
  align-items: center;
`;

const LogoText = styled(Text)`
  font-size: 40px;
  color: #2b2b2b;
  font-style: italic;
`;

export const BigLogo = () => {
  return (
    <LogoContainer>
      <LogoText>Gym Track</LogoText>
    </LogoContainer>
  );
};
