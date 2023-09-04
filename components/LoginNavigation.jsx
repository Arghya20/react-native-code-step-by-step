/* eslint-disable react/react-in-jsx-scope */

import {Text, View} from 'react-native';

const Login = props => {
  const {name} = props.route.params;
  return (
    <View>
      <Text>Login Screen</Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontSize: 18,
          fontWeight: 'bold',
          color: '#000000',
        }}>
        Name: {name}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontSize: 18,
          fontWeight: 'bold',
          color: '#000000',
        }}></Text>
    </View>
  );
};

export default Login;
