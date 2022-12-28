import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const TripPlanner = ({navigation}) => {
  return (
    <>
    <Text>TripPlanner</Text>
      <TouchableOpacity onPress={() => navigation.push('main')}>
        <Text>go back</Text>
      </TouchableOpacity>
    </>
  );
};

export default TripPlanner;
