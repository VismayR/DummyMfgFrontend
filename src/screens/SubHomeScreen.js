import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SubHome = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Station')}>
          <Text style={styles.cardText}>Station Finder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Trip')}>
          <Text style={styles.cardText}>Trip Planner</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Promotion')}>
          <Text style={styles.cardText}>Promotions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Loyality')}>
          <Text style={styles.cardText}>Loyalty Clubs</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 40,
  },
  card: {
    height: 120,
    width: 120,
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 2,
    margin: 10,
  },
  cardText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default SubHome;
