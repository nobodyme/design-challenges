import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RootNavigator from './RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <RootNavigator/>
    </NavigationContainer>
  );
}