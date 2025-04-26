import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import SelectClassScreen from './screens/SelectClassScreen';
import CheckinScreen from './screens/CheckinScreen';
import JustifyAbsenceScreen from './screens/JustifyAbsenceScreen';
import QRGenerateScreen from './screens/QRGenerateScreen';
import FrequencyScreen from './screens/FrequencyScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SelectClass" component={SelectClassScreen} />
        <Stack.Screen name="Checkin" component={CheckinScreen} />
        <Stack.Screen name="JustifyAbsence" component={JustifyAbsenceScreen} />
        <Stack.Screen name="QRGenerate" component={QRGenerateScreen} />
        <Stack.Screen name="Frequency" component={FrequencyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
