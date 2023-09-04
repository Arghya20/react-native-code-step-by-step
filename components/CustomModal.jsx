import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const CustomModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.main}>
      {show && (
        <View style={styles.modalWrapper}>
          <View style={styles.modalBody}>
            <Text>This is our custom text</Text>
            <Button title="Close Modal" onPress={() => setShow(false)} />
          </View>
        </View>
      )}

      <Button title="Open Modal" onPress={() => setShow(true)} />
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'flex-end'},

  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBody: {
    backgroundColor: '#fafafa',
    height: 300,
    width: 300,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
});
