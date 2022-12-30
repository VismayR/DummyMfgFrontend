import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

const SidebarHeader = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <View
        style={{
          height: 60,
          width: 60,
          backgroundColor: 'grey',
          borderRadius: 50,
        }}></View>
      <Text style={{textAlign: 'center'}}>Vismay Raul</Text>
    </View>
  );
};

export default SidebarHeader;
