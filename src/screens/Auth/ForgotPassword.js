import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
  } from 'react-native';
  import React from 'react';
  import {styles} from './style';
  
  const wordDir = require('../../utils/en.json');
  
  export default function ForgotPassword({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.logo}> 
          <Text style={styles.logoTxt}>mfg</Text>
        </View>
        <View style={styles.inputsContainer}>
            <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
                <Text style={styles.backArrow}>{`<`}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.title}>{wordDir.forgotPasswordTitle}</Text>
            <Text >{wordDir.enterEmailMsg}</Text>
          <TextInput style={styles.inputs} value="Email" />
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>{wordDir.next}</Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
                <Text style={styles.cancelBtn}>{wordDir.cancelBtnTitle}</Text>
            </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }