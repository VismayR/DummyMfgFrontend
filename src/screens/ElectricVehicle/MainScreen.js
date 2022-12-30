import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ADD_VEHICLE_BUTTON,
  ELECTRIC_VEHICLE_AVAILABILITY,
} from '../../constant/ElectricVehicle';

const MainElectricVehicleScreen = ({navigation}) => {
  return (
    <>
      <Text style={styles.vehicleAvailability}>
        {ELECTRIC_VEHICLE_AVAILABILITY}
      </Text>
      <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('SELECT ELECTRIC VEHICLE')}>
        <Text style={styles.btnText}>{ADD_VEHICLE_BUTTON}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  vehicleAvailability: {
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
  },
  addButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default MainElectricVehicleScreen;