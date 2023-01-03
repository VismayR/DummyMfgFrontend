import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

//constants
import {UserEndPoint} from '../constant/EndPoints';
import {
  CHANGE_PICTURE,
  DELETE_PICTURE,
  profileEditedSavedButton,
  userCountryTitle,
  userEmailTitle,
  userFirstNameTitle,
  userLastNameTitle,
  userNameTitle,
  userPostcodeTitle,
} from '../constant/Profile';

import makeRequest from '../Networking/ConnectApi';
import {setEditButton} from '../Redux/actions/EditBtn';
import {styles} from './profile/style';
import ModelComp from './profile/model';

const ProfileEditDesign = () => {
  //getting state from redux for edit button.
  const initialState = useSelector(state => state.editBtnReducer);
  const dispatch = useDispatch();

  //storing response from the api.
  const [responses, setResponses] = useState({});

  //Data to be changed.
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [postcode, setPostcode] = useState();
  const [country, setCountry] = useState();
  const [imageUrl, setImageUrl] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  const filepath = `https://a6a7-114-143-107-6.in.ngrok.io/${imageUrl}`;

  //getting the response from api in initial screen load.
  useEffect(() => {
    async function request() {
      await makeRequest(UserEndPoint, 'get', undefined)
        .then(function (response) {
          setResponses(response[0]);
          console.log(response);
        })
        .catch(function (err) {
          console.warn(err);
        });
    }
    request();
    dispatch(setEditButton(true));
  }, []);

  //passing the data to the state initially with the condition rendering related to change in response.
  useEffect(() => {
    setFirstName(responses?.firstName);
    setLastName(responses?.lastName);
    setPostcode(responses?.postcode);
    setCountry(responses?.country);
    setImageUrl(responses?.image_url);
  }, [responses]);

  //sending he edited data to the data base.
  const putData = () => {
    let data = {
      id: responses.id,
      country: country,
      email: responses.email,
      userName: responses.userName,
      firstName: firstName,
      lastName: lastName,
      postcode: postcode,
    };
    makeRequest(UserEndPoint, 'put', data)
      .then(response => response && dispatch(setEditButton(true)))
      .catch(err => console.warn(err));
  };

  //image deleting
  const deleteImg = () => {
    setImageUrl(null);
    putData;
  };

  const chooseImage = async () => {
    await ImagePicker.openPicker({
      mediaType: 'photo',
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.path)
    })
    .catch(err=>console.log(err))
  };

  // const uploadImage = (imagePath)=>{
  //   const imageData = new FormData();
  //   console.log(imageData)
  //   imageData.append('image_url',{
  //     uri: imagePath,
  //     name:'image.jpg',
  //     type:'image/jpg'
  //   })
  //   // console.log('form data', imageData)
  // }

  return (
    <ScrollView style={styles.mainView}>
      <ModelComp
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setCountry={setCountry}
      />
      <View style={styles.displayArea}>
        <View style={styles.imageContainer}>
          {imageUrl !== null ? (
            <Image
              style={styles.profileImage}
              source={{
                uri: filepath,
              }}
            />
          ) : (
            <Text style={styles.profileImage}>KG</Text>
          )}
        </View>
        {!initialState && (
          <View style={styles.pictureHandler}>
            <TouchableOpacity style={styles.picChangeBtn} onPress={chooseImage}>
              <Text style={styles.picChangeBtn}>{CHANGE_PICTURE}</Text>
            </TouchableOpacity>

            <View style={styles.line} />
            <TouchableOpacity onPress={deleteImg}>
              <Text style={styles.picDeleteBtn}>{DELETE_PICTURE}</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.nameDisplayView}>
          <View style={styles.nameInputView}>
            <Text style={styles.title}>{userFirstNameTitle}</Text>
            <TextInput
              style={!initialState ? styles.changeInput : styles.input}
              value={firstName}
              onChangeText={setFirstName}
              editable={initialState ? false : true}
            />
          </View>
          <View style={styles.nameInputView}>
            <Text style={styles.title}>{userLastNameTitle}</Text>
            <TextInput
              style={!initialState ? styles.changeInput : styles.input}
              value={lastName}
              onChangeText={setLastName}
              editable={initialState ? false : true}
            />
          </View>
        </View>
        <Text style={styles.title}>{userNameTitle}</Text>
        <TextInput
          style={!initialState ? styles.noChangeInput : styles.input}
          value={responses.userName}
          editable={false}
        />
        <Text style={styles.title}>{userEmailTitle}</Text>
        <TextInput
          style={!initialState ? styles.noChangeInput : styles.input}
          value={responses?.email}
          editable={false}
        />
        <Text style={styles.title}>{userPostcodeTitle}</Text>
        <TextInput
          style={!initialState ? styles.changeInput : styles.input}
          value={`${postcode}`}
          onChangeText={setPostcode}
          keyboardType={'numeric'}
          editable={initialState ? false : true}
        />
        <Text style={styles.title}>{userCountryTitle}</Text>
        <TextInput
          style={!initialState ? styles.changeInput : styles.input}
          value={country}
          onFocus={() => setModalVisible(true)}
          editable={initialState ? false : true}
        />
      </View>
      {!initialState && (
        <TouchableOpacity style={styles.saveButton} onPress={putData}>
          <Text style={styles.saveBtnText}>{profileEditedSavedButton}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default ProfileEditDesign;
