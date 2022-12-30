import { StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectElectricVehicle from '../screens/ElectricVehicle/SelectElectricVehicle';
import MainElectricVehicleScreen from '../screens/ElectricVehicle/MainScreen';
import VehicleDetails from '../screens/ElectricVehicle/VehicleDetails';

export default function ElectricVehicle() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainElectricVehicleScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="SELECT ELECTRIC VEHICLE"
        component={SelectElectricVehicle}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="VehicleDetails"
        component={VehicleDetails}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})