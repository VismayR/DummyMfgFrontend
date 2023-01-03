import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView:{
      paddingHorizontal:20
    },
    title: {
      color: 'lightgray',
    },
    displayArea: {
      flexDirection: 'column',
      flex: 1,
    },
    pictureHandler: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 40,
      marginVertical: 20,
    },
    picChangeBtn: {
      color: 'blue',
      fontWeight: 'bold',
    },
    line: {
      width: 2,
      backgroundColor: 'black',
      marginTop: 3,
    },
    picDeleteBtn: {
      color: 'red',
      fontWeight: 'bold',
    },
    saveButton: {
      backgroundColor: 'red',
      padding: 10,
      marginBottom:10,
    },
    saveBtnText:{
        color:'white',
        textAlign:'center',
    },
    nameDisplayView: {
      display: 'flex',
      flexDirection: 'row',
      flex:1,
      marginTop:10
    },
    nameInputView:{
      flex:1
    },
    profileImage: {
      height: 80,
      width: 80,
      borderRadius: 50,
      marginTop: 30,
      color: 'white',
      textAlign: 'center',
      fontSize: 50,
      backgroundColor: 'gray',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    input: {
      color: 'black',
      paddingHorizontal:5
    },
    changeInput:{
      borderWidth:2,
      borderColor:'lightgray',
      marginVertical:10,
      paddingHorizontal:10
    },
    noChangeInput:{
      backgroundColor:'lightgray',
      marginVertical:10,
      paddingHorizontal:10
    },
    countryInput:{
      paddingVertical:15,
    },
    countryText:{
      color:'black'
    }
  });