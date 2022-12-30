import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SidebarHeader from '../components/SidebarHeader';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <SidebarHeader />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
