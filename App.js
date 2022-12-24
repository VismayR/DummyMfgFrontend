import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import { StackNav } from './src/navigator/StackNavigatior';


const App = () => {

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}

export default App;