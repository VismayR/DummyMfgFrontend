import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  CAR_MODEL,
  CAR_NAME,
  CAR_PRICE,
  CAR_VIN,
  SELECT_VEHICLE_BTN,
} from '../../constant/ElectricVehicle';
import {StackActions} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setGetUserDetails} from '../../Redux/actions/SelectedVehicle';

const CARS = require('../ElectricVehicle/vehicleData.json');

export default function VehicleDetails({route, navigation}) {
  const dispatch = useDispatch();
  return (
    <ScrollView>
      {CARS.filter(item => item.id === route.params.id).map(res => (
        <View style={styles.detailView}>
          <View>
            <Image source={{uri: res.url}} style={styles.image} />
            <Text style={[styles.textPositions, styles.title]}>{CAR_NAME}</Text>
            <Text style={styles.textPositions}>{res.car}</Text>
            <Text style={[styles.textPositions, styles.title]}>
              {CAR_MODEL}
            </Text>
            <Text style={styles.textPositions}>{res.car_model}</Text>
            <Text style={[styles.textPositions, styles.title]}>{CAR_VIN}</Text>
            <Text style={styles.textPositions}>{res.car_vin}</Text>
            <Text style={[styles.textPositions, styles.title]}>
              {CAR_PRICE}
            </Text>
            <Text style={styles.textPositions}>{res.price}</Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.dispatch(StackActions.popToTop());
              dispatch(setGetUserDetails(res));
            }}>
            <Text style={styles.btnText}>{SELECT_VEHICLE_BTN}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detailView: {
    flexBasis: 450,
    backgroundColor: 'lightgray',
  },
  title: {
    color: 'gray',
  },
  textPositions: {
    margin: 10,
  },
  btn: {
    backgroundColor: 'red',
    margin: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
});
