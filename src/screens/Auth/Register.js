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

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.registerLogo}>
        <Text style={styles.registerLogoTxt}>mfg</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{wordDir.register}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navBtn}>{wordDir.login}</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.inputs} value="First name" />
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          value="Last name"
        />
        <TextInput style={styles.inputs} value="Username" />
        <Text>{wordDir.userNameMessage}</Text>
        <TextInput style={styles.inputs} value="Postcode" />
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>{wordDir.next}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
