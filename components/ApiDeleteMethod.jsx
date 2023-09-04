import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const ApiDeleteMethod = () => {
  const [user, setUser] = useState([]);

  const getData = async () => {
    const url = 'http://192.168.0.101:3000/users';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setUser(result);
    }
  };

  const deleteUser = async id => {
    const url = 'http://192.168.0.101:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();
    if (result) {
      console.warn('user Delted');
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#C6C6C6',
          padding: 10,
          alignItems: 'center',
        }}>
        <View style={{flex: 1.5}}>
          <Text style={styles.text}>Name</Text>
        </View>
        <View style={{flex: 2.5}}>
          <Text style={styles.text}>Age</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.text}>Operation</Text>
        </View>
      </View>

      <FlatList
        data={user}
        renderItem={({item}) => (
          <View style={styles.wrapper}>
            <View style={styles.name}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.age}>
              <Text style={styles.text}>{item.age}</Text>
            </View>
            <View style={styles.delete}>
              <Button onPress={() => deleteUser(item.id)} title="Delete" />
            </View>
            <View style={styles.edit}>
              <Button title="Edit" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ApiDeleteMethod;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E1E1E1',
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 6,
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {fontSize: 16, fontWeight: 'bold', color: 'black'},
  name: {flex: 1, margin: 2},
  age: {flex: 1, margin: 2},
  delete: {flex: 1, margin: 2},
  edit: {flex: 1, margin: 2},
});
