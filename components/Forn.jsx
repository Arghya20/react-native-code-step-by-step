import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFornData = () => {
    setEmail('');
    setName('');
    setPassword('');
    setDisplay(false);
  };
  return (
    <View>
      <Text style={styles.headerText}>Simple Form in React Native</Text>
      <TextInput
        onChangeText={e => setName(e)}
        style={styles.textInput}
        placeholder="Enter Your Name"
        value={name}
      />
      <TextInput
        onChangeText={e => setEmail(e)}
        style={styles.textInput}
        placeholder="Enter Your Email"
        value={email}
      />
      <TextInput
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Enter Your Password"
        value={password}
      />

      <View>
        <Pressable style={styles.btnSecondary} onPress={() => setDisplay(true)}>
          <Text style={{fontSize: 24, color: 'white', textAlign: 'center'}}>
            Show Detils
          </Text>
        </Pressable>
        <Pressable style={styles.btnPrimary} onPress={resetFornData}>
          <Text style={{fontSize: 24, color: 'white', textAlign: 'center'}}>
            Clear Detils
          </Text>
        </Pressable>
      </View>

      <ScrollView>
        <View style={{marginHorizontal: 20, marginVertical: 10}}>
          {display && (
            <View>
              <Text>User Name : {name}</Text>
              <Text>User Email : {email}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: '#183D3D',
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#ebebeb',
    margin: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 6,
  },
  btnPrimary: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    marginHorizontal: 29,
    marginTop: 20,
    padding: 8,
    borderRadius: 6,
  },
  btnSecondary: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 20,
    marginHorizontal: 29,
    marginTop: 20,
    padding: 8,
    borderRadius: 6,
  },
});
