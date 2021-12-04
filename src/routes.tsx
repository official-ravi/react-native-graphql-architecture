import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from './screens/Home';


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

const styles = StyleSheet.create({
  badgeIconView: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    zIndex: 10,
    left: 24,
    bottom: 20,
    padding: 1,
    borderRadius: 20,
    fontSize: 14,
  },
});
