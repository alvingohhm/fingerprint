import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from 'starter_kit/src/config/routes';

const App = () => {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
};
export default App;
