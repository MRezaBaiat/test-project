import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/app.navigator';
import RootStack from './navigation/routes';

export default function App () {
  return (
            <Provider store={store}>
              <NavigationContainer ref={AppNavigator.setTopLevelNavigator}>
                <RootStack/>
              </NavigationContainer>
            </Provider>
  );
}
