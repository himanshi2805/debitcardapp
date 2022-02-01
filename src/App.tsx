import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import axios from 'axios';
import {PersistGate} from 'redux-persist/integration/react';
import {AppTabBar} from '@app/navigation';
import configureAppStore from './redux/configureAppStore';
import {Colors} from '@app/core-ui';
import {API_URL} from '@app/constants';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(
  request => {
    //console.log(request);
    // Edit request config
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export const {store, persistor} = configureAppStore();

const DebitCardApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor={Colors.blue} />
          <AppTabBar />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default DebitCardApp;
