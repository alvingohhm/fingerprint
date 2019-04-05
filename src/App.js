import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { MockupContainer } from 'starter_kit/src/lib/styles/Mockup';

const App = () => {
  return (
    <PaperProvider>
      <MockupContainer>
        <Text style={styles.welcome}>Welcome to React-Native</Text>
        <Text style={styles.instructions}>Home Screen</Text>
        <Button mode="outlined">Create Wallet</Button>
      </MockupContainer>
    </PaperProvider>
  );
};
export default App;
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
