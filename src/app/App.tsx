import React from 'react';
import 'react-native-gesture-handler';
import { store } from 'core';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
