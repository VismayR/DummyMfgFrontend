import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoyaltyClubs from '../screens/LoyaltyClubs';
import Promotions from '../screens/Promotions';
import StationFinder from '../screens/StationFinder';
import SubHome from '../screens/SubHomeScreen';
import TripPlanner from '../screens/TripPlanner';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={SubHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Station"
        component={StationFinder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Trip"
        component={TripPlanner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Promotion"
        component={Promotions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Loyality"
        component={LoyaltyClubs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
