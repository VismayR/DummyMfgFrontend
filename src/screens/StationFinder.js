import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const StationFinder = ({navigation}) => {
  return (
    <>
      <Text>StationFinder</Text>
      <TouchableOpacity onPress={() => navigation.push('main')}>
        <Text>go back</Text>
      </TouchableOpacity>
    </>
  );
};

export default StationFinder;
