import React from 'react';
import {FlatList, Modal, Pressable, Text, View} from 'react-native';

const ModelComp = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      >
      <View style={{backgroundColor:'gray',flex:1}}>
        <View>
          <Text>Hello World!</Text>
          <FlatList/>
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
