import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyAccount } from '../screens/MyAccount';
import { Home } from '../screens/Home';
import CustomDrawer from './CustomDrawer';
import EVPower from '../screens/EVPower';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name='My Account'
        component={MyAccount}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="EV Power"
        component={EVPower} 
      />
    </Drawer.Navigator> 
  )
}

export default DrawerNavigator