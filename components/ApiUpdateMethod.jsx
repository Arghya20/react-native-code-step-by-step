import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const ApiUpdateMethod = () => {
  const [user, setUser] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

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

  const updateUser = data => {
    setVisible(true);
    setSelectedUser(data);
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
              <Button onPress={() => updateUser(item)} title="Edit" />
            </View>
          </View>
        )}
      />

      <Modal visible={visible} transparent={true}>
        <UserModal
          setVisible={setVisible}
          selectedUser={selectedUser}
          getData={getData}
        />
      </Modal>
    </View>
  );
};
// ===================== Modal Element =====================
const UserModal = ({setVisible, selectedUser, getData}) => {
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setAge(selectedUser.age.toString());
    }
  }, [selectedUser]);

  const updateUser = async () => {
    const url = 'http://192.168.0.101:3000/users';
    const id = selectedUser.id;
    let result = await fetch(`${url}/${id}`, {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, age}),
    });
    getData();
    setVisible(false);
  };

  return (
    <View style={styles.modalCenterView}>
      <View style={styles.mondalBox}>
        <Text>Update the user Details</Text>
        <View style={{marginVertical: 18}}>
          <Text style={styles.text}>Name:</Text>
          <TextInput
            style={styles.inputBox}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Text style={styles.text}>Age:</Text>
          <TextInput
            style={styles.inputBox}
            value={age}
            onChangeText={text => setAge(text)}
          />
        </View>

        <Button title="Update" color={'green'} onPress={updateUser} />
        <View style={{marginTop: 10}}>
          <Button onPress={() => setVisible(false)} title="Close" />
        </View>
      </View>
    </View>
  );
};

export default ApiUpdateMethod;

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
  modalCenterView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mondalBox: {
    backgroundColor: 'tomato',
    padding: 40,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 6,
  },
  inputBox: {
    backgroundColor: '#fafafa',
    borderRadius: 6,
    paddingHorizontal: 8,
    fontSize: 16,
  },
});
