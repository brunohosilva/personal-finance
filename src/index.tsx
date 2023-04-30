import React from 'react';
import { LogBox } from 'react-native';
import { Router } from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

LogBox.ignoreAllLogs();

export default () => (
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </>
);
