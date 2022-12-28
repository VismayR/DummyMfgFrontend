import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const LoyaltyClubs = ({navigation}) => {
  return (
    <>
      <Text>LoyaltyClubs</Text>
      <TouchableOpacity onPress={() => navigation.push('main')}>
        <Text>go back</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoyaltyClubs;
