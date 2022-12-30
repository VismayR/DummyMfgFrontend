import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import ProfileEditDesign from './Profile';
import Payment from './Payment';
import ElectricVehicle from '../navigator/ElectricVehicleStack';

export const MyAccount = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileEditDesign} />
      <Tab.Screen name="Electric Vehicle" component={ElectricVehicle} />
      <Tab.Screen name="Payment" component={Payment} />
    </Tab.Navigator>
  );
};
