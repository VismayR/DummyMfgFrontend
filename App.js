import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
