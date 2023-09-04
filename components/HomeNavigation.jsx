/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const Home = props => {
  const [name, setname] = useState('');

  return (
    <View>
      <Text>Home Screen</Text>
      <TextInput
        placeholder="Enter Your Name"
        style={{
          fontSize: 18,
          backgroundColor: '#E0E0E0',
          margin: 10,
          padding: 12,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: '#65DAFF',
        }}
        onChangeText={e => setname(e)}
      />
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('Login', {name})}
      />
    </View>
  );
};

export default Home;
