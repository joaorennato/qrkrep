import React from 'react';
import { Platform } from 'react-native';
import UserContextProvider from './src/Context/UserContext';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#000000"
          barStyle={ Platform.OS == 'android' ? 'light-content' : 'dark-content' }
          showHideTransition="fade"
          hidden={false} />
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}