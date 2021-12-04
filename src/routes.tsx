import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>

  );
};
export default Routes;


