import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './style';

const wordDir = require('../../utils/en.json');

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoTxt}>mfg</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{wordDir.login}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.navBtn}>{wordDir.register}</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.inputs} value="Email" />
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          value="enter password"
        />
        <Text style={styles.forgotPasswordNav} onPress={() => navigation.navigate('Forgot password')}>{wordDir.forgotPassword}</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>{wordDir.login}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
