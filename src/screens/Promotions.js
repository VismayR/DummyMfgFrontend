import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Promotions = ({navigation}) => {
  return (
    <>
      <Text>Promotions</Text>
      <TouchableOpacity onPress={() => navigation.push('main')}>
        <Text>go back</Text>
      </TouchableOpacity>
    </>
  );
};

export default Promotions;
