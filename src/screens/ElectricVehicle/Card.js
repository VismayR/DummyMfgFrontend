import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import VehicleDetails from './VehicleDetails';
import { styles } from './style';

export default function Card({title, price, url, navigation, id}) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('VehicleDetails', {id: id})}>
      <Image style={styles.image} source={{uri: url}} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}
