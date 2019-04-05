import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { MockupContainer } from 'starter_kit/src/lib/styles/Mockup';

const WelcomeMsg = styled.Text`
  color: black;
  font-size: 20;
  text-align: center;
  margin: 10px;
`;
const ScreenIdicator = styled.Text`
  color: blue;
  font-size: 15;
  text-align: center;
`;
class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  // state = { loading: true };
  render() {
    return (
      <MockupContainer>
        <WelcomeMsg>Welcome to React-Native</WelcomeMsg>
        <ScreenIdicator>Home Screen</ScreenIdicator>
        <Button mode="outlined">Create Wallet</Button>
      </MockupContainer>
    );
  }
}
export default Welcome;
