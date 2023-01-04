import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {
  ADD_VEHICLE_BUTTON,
  ELECTRIC_VEHICLE_AVAILABILITY,
} from '../../constant/ElectricVehicle';
import AddEvCard from './AddEvCard';
import { styles } from './style';

const MainElectricVehicleScreen = ({navigation}) => {
  const initialState = useSelector(state => state.selectedVehicleReducer);

  const renderItem = ({item}) => <AddEvCard key={item.id} cardData={item} />;

  return (
    <>
      {initialState.data == '' ? (
        <Text style={styles.vehicleAvailability}>
          {ELECTRIC_VEHICLE_AVAILABILITY}
        </Text>
      ) : (
        <FlatList
          data={initialState.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('SELECT ELECTRIC VEHICLE')}>
        <Text style={styles.btnText}>{ADD_VEHICLE_BUTTON}</Text>
      </TouchableOpacity>
    </>
  );
};

export default MainElectricVehicleScreen;
