import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

function RootNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      cardStyle: { backgroundColor: 'transparent' },
    }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Details" component={DetailScreen}/>
    </Stack.Navigator>
  )
}

export default React.memo(RootNavigator);