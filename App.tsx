import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 50,
          backgroundColor: 'skyblue',
          marginHorizontal: 20,
          padding: 4,
          borderRadius: 25,
        }}>
        All the file in components Folder -{' '}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
