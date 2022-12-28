import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect } from 'react'
import ProfileEditDesign from './Profile';
import ElectricVehicle from './ElectricVehicle';
import Payment from './Payment';
import UsersApi from '../Networking/ConnectApi';

export const MyAccount = () => {
  const Tab = createMaterialTopTabNavigator();
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileEditDesign} />
      <Tab.Screen name="Electric Vehicle" component={ElectricVehicle} />
      <Tab.Screen name="Payment" component={Payment} />
    </Tab.Navigator>
  )
}
