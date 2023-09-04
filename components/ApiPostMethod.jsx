import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const ApiPostMethod = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const getApiData = async () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!age) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }

    if (!name || !age) {
      return false;
    }

    const userData = {
      name,
      age,
    };

    // To Satart Server -> json-server --host 0.0.0.0 db.json
    // Get Url -> http://192.168.0.101:3000

    const url = 'http://192.168.0.101:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userData),
    });
    result = await result.json();
    console.warn(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View>
      <Text>App </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        onChangeText={text => setName(text)}
      />
      {nameError && (
        <Text style={styles.textError}>*Please Enter a valid Name!</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter Your Age"
        onChangeText={text => setAge(text)}
      />

      {ageError && (
        <Text style={styles.textError}>*Please Enter a valid Age!</Text>
      )}

      <Button title="post data" onPress={getApiData} />
    </View>
  );
};

export default ApiPostMethod;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#D7D7D7',
    margin: 10,
    paddingLeft: 10,
    borderRadius: 6,
    shadowColor: '#808080',
    elevation: 4,
  },
  textError: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 14,
    marginBottom: 10,
  },
});
