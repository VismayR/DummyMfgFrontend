import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

//constants
import {UserEndPoint} from '../constant/EndPoints';
import {
  profileEditedSavedButton,
  userCountryTitle,
  userEmailTitle,
  userFirstNameTitle,
  userLastNameTitle,
  userNameTitle,
  userPostcodeTitle,
} from '../constant/Profile';

import makeRequest from '../Networking/ConnectApi';

const ProfileEditDesign = () => {
  //getting state from redux for edit button.
  const initialState = useSelector(state => state.editBtnReducer);

  //storing response from the api.
  const [responses, setResponses] = useState({});

  //Data to be changed.
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [postcode, setPostcode] = useState();
  const [country, setCountry] = useState();

  //getting the response from api in initial screen load.
  useEffect(async () => {
    await makeRequest(UserEndPoint, 'get', undefined)
      .then(function (response) {
        setResponses(response[0]);
      })
      .catch(function (err) {
        console.warn(err);
      });
  }, []);

  //passing the data to the state initially with the condition rendering related to change in response.
  useEffect(() => {
    setFirstName(responses?.firstName);
    setLastName(responses?.lastName);
    setPostcode(responses?.postcode);
    setCountry(responses?.country);
  }, [setResponses]);

  //sending he edited data to the data base.
  const putData = () => {
    let data = {
      id: responses.id,
      country: responses.country,
      email: responses.email,
      userName: responses.userName,
      firstName: firstName,
      lastName: lastName,
      postcode: postcode,
    };
    makeRequest(UserEndPoint, 'put', data)
      .then(response => console.warn(response))
      .catch(err => console.warn(err));
  };

  return (
    <View>
      <Text style={styles.title}>{userFirstNameTitle}</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        editable={initialState ? false : true}
      />
      <Text style={styles.title}>{userLastNameTitle}</Text>
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        editable={initialState ? false : true}
      />
      <Text style={styles.title}>{userNameTitle}</Text>
      <TextInput value={responses.userName} editable={false} />
      <Text style={styles.title}>{userEmailTitle}</Text>
      <TextInput value={responses?.email} editable={false} />
      <Text style={styles.title}>{userPostcodeTitle}</Text>
      <TextInput
        value={`${postcode}`}
        onChangeText={setPostcode}
        keyboardType={'numeric'}
        editable={initialState ? false : true}
      />
      <Text style={styles.title}>{userCountryTitle}</Text>
      <TextInput
        value={country}
        onChangeText={setCountry}
        editable={initialState ? false : true}
      />
      {!initialState && (
        <TouchableOpacity style={styles.saveButton} onPress={putData}>
          <Text>{profileEditedSavedButton}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'lightgray',
  },
  saveButton: {
    backgroundColor: 'red',
    padding: 10,
  },
});

export default ProfileEditDesign;
