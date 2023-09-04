import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const ApiSearch = () => {
  const [focus, setFocus] = useState(false);
  const customStyle = focus ? styles.focusTextInput : styles.textInput;

  const [data, setData] = useState([]);

  const searchUser = async text => {
    const url = `http://192.168.0.101:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  return (
    <View>
      <Text>App</Text>

      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={customStyle}
        placeholder=" 🔍 Search User"
        onChangeText={text => searchUser(text)}
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              margin: 10,
              backgroundColor: '#DFDFDF',
              padding: 10,
              borderRadius: 8,
            }}>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ApiSearch;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#DADADA',
    margin: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    fontSize: 18,
    borderColor: 'white',
    borderWidth: 2,
  },
  focusTextInput: {
    backgroundColor: '#BCE2F6',
    margin: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    fontSize: 18,
    borderColor: 'skyblue',
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});
