import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import AuthNavigation from './src/navigator/AuthNavigation';

const App = () => {
  const validation = false;
  return (
      <Provider store={store}>
        <NavigationContainer>
          {validation ? <DrawerNavigator /> : <AuthNavigation />}
        </NavigationContainer>
      </Provider>
  );
};

export default App;
