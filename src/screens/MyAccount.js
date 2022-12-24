import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { Text } from 'react-native'
import { MyAccountConst } from '../constant/MyAccount'
import ElectricVehicle from './ElectricVehicle';
import Payment from './Payment';
import Profile from './Profile';

export const MyAccount = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    // <Text>{MyAccountConst}</Text>
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Electric Vehicle" component={ElectricVehicle} />
      <Tab.Screen name="Payment" component={Payment} />
    </Tab.Navigator>
  )
}
