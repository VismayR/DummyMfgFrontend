import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyAccount} from '../screens/MyAccount';
import {Home} from '../screens/Home';
import CustomDrawer from './CustomDrawer';
import EVPower from '../screens/EVPower';
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setEditButton} from '../Redux/actions/EditBtn';
import StationFinder from '../screens/StationFinder';
import Promotions from '../screens/Promotions';
import TripPlanner from '../screens/TripPlanner';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const initialState = useSelector(state => state.editBtnReducer);

  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home">
      <Drawer.Screen
        name="My Account"
        component={MyAccount}
        options={{
          headerRight: () =>
            initialState && (
              <TouchableOpacity
                onPress={() => dispatch(setEditButton(false))}
                color="#fff">
                <Image
                  style={styles.editLogo}
                  source={require('../../assets/images/editLogo.png')}
                />
              </TouchableOpacity>
            ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen name="EV Power" component={EVPower} />
      <Drawer.Screen name="Station Finder" component={StationFinder} />
      <Drawer.Screen name="Promotions" component={Promotions} />
      <Drawer.Screen name="Trip Planner" component={TripPlanner} />
      {/* <Drawer.Screen name="Terms and Conditions" component={EVPower} />
      <Drawer.Screen name="Charging History" component={EVPower} /> */}

    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  editLogo: {
    height: 20,
    width: 20,
    marginEnd: 15,
  },
});

export default DrawerNavigator;
