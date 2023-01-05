import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import {styles} from './style';
import { DEFAULT_BTN, REMOVE_BTN } from '../../constant/ElectricVehicle';
import { useDispatch, useSelector } from 'react-redux';
import { setToDelete } from '../../Redux/actions/SelectedVehicle';

export default function AddEvCard(props) {

  const initialState = useSelector(state => state.selectedVehicleReducer.data);
  const dispatch = useDispatch()

  const deleteFromSelectedItem = ()=>{
    const newState = initialState.map((x)=>{return props.cardData.id !== x.id })
    dispatch(setToDelete(newState))
  }

  return (
    <View key={props.cardData.id} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{uri: props.cardData.url}} style={styles.carImage} />
        <View>
          <Text style={styles.carName}>{props.cardData.car}</Text>
          <Text>{props.cardData.price}</Text>
        </View>
      </View>
      <View style={styles.horizontalLine}/>
      <View style={styles.insideCardBtn}>
        <TouchableOpacity onPress={deleteFromSelectedItem}>
          <Text style={[styles.insideCardBtnTxt,styles.DelBtnTxt]}>{REMOVE_BTN}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.insideCardBtnTxt,styles.DefBtnTxt]}>{DEFAULT_BTN}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
