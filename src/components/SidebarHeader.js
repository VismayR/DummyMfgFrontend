import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import { _18px } from '../utils/responsive';

const SidebarHeader = () => {
  
  const initialState = useSelector(state => state.userDetailsReducer);

  return (
    <View
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <View
        style={{
          height: 60,
          width: 60,
          backgroundColor: 'grey',
          borderRadius: 50,
        }}>
          {initialState.data[0]&&initialState.data[0].image_url !== null ? (
            <Image
              source={{
                uri: `https://ebbe-114-143-107-6.in.ngrok.io/${imageUrl}`,
              }}
            />
          ) : (
            <Text style={styles.title}
            >{initialState.data[0]&&initialState.data[0].firstName[0]+initialState.data[0].lastName[0]}</Text>
          )}
        </View>
      <Text style={{textAlign: 'center'}}>{initialState.data[0]&&initialState.data[0].userName}</Text>
    </View>
  );
};

export default SidebarHeader;

const styles = StyleSheet.create({
  title:{
    color:'white',
    textAlign:'center',
    fontSize:_18px*2.3,
    marginTop:5
  }
})


