import React from 'react';
import { Provider } from 'react-redux';
import { configStore } from './src/redux/store';
import Home from './src/screens/Home';

const store = configStore();

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
