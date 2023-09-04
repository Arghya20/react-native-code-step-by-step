import {StyleSheet, Text, View, Button, Modal} from 'react-native';
import React, {useState} from 'react';

const ModalComponents = () => {
  const [showmodal, setShowmodal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showmodal} animationType="slide">
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>This Modal in React Native</Text>
            <Button title="Close Modal" onPress={() => setShowmodal(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.btnView}>
        <Button title="Open Modal" onPress={() => setShowmodal(true)} />
      </View>
    </View>
  );
};

export default ModalComponents;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 10,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fafafa',
    padding: 50,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 6,
  },
  modalText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});
