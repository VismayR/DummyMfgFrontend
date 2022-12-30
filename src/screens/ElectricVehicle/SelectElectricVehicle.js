import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Card from './Card';
import { SEARCH_PLACEHOLDER } from '../../constant/ElectricVehicle';

const CARS = require('../ElectricVehicle/vehicleData.json');

export default function SelectElectricVehicle({navigation}) {
  
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(CARS);

  const renderItem = ({item}) =>   (
  <Card title={item.car} price={item.price} url={item.url} navigation={navigation} id={item.id}/>
)


  const searchFilter = (text) => {
    // Check if searched text is not blank
    if (text) {
      //If text is not blank filter all cars data and update filter data
      const newData = CARS.filter((item)=>{
        // Applying filter for the inserted text in search bar
        const itemData = item.car
          ? item.car.toUpperCase()
          : null;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      // If search input is blank update filteredData with all cars data
      setFilteredData(CARS);
      setSearch(text);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.searchLogo}
            source={require('../../../assets/images/search.png')}
          />
          <TextInput
            style={styles.input}
            placeholder={SEARCH_PLACEHOLDER}
            value={search}
            onChangeText={value => searchFilter(value)}
            // editable={initialState ? false : true}
          />
        </View>
        <View style={[styles.filterContainer]}>
          <Image
            style={styles.filterLogo}
            source={require('../../../assets/images/filter.png')}
          />
        </View>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
  },
  topContainer: {
    margin: 10,
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
  },
  inputContainer: {
    borderWidth: 2,
    borderColor:'lightgray',
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 5,
  },
  searchLogo: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginRight: 10,
  },
  filterContainer: {
    padding: 10,
    marginLeft: 10,
    elevation: 5,
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'gray',
  },
  filterLogo: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
});
