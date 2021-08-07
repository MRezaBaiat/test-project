import React, { Suspense, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/main.screen';
import ShipmentScreen from '../screens/shipment.screen';
import SummaryScreen from '../screens/summary.screen';

const Stack = createStackNavigator();

export default () => {
  return (
        <Stack.Navigator
            headerMode={'none'}
            mode={'modal'}
            initialRouteName={'main-screen'}
            screenOptions={{
              animationTypeForReplace: 'push',
              headerShown: false
            }}>
            <Stack.Screen name="main-screen" component={MainScreen} />
            <Stack.Screen name="shipment-screen" component={ShipmentScreen} />
            <Stack.Screen name="summary-screen" component={SummaryScreen} />
        </Stack.Navigator>
  );
};
