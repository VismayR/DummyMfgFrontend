import React from 'react';
import {FlatList, Image, Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';

const flag = require('../profile/country.json')

const ModelComp = (props) => {
  const renderItem = (item) => (
    <TouchableOpacity onPress={()=>{props.setCountry(item.item.name),props.setModalVisible(!props.modalVisible)}}>
      <Image source={{uri: `data:image/jpeg;base64,${item.flag}`}}/>
      <Text>{item.item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      >
      <View style={{backgroundColor:'gray',flex:1}}>
        <View>
          <Text>Hello World!</Text>
          <FlatList
        data={flag}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
          <Pressable
            onPress={() => props.setModalVisible(!props.modalVisible)}>
            <Text>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModelComp;
