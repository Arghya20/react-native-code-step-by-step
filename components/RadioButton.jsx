import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const RadioButton = () => {
  const skills = [
    {
      id: 1,
      name: 'swift',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Php',
    },
    {
      id: 4,
      name: 'Java',
    },
    {
      id: 5,
      name: 'JavaScript',
    },
  ];
  const [selected, setSelected] = useState(1);
  return (
    <View style={styles.main}>
      {skills.map(skill => (
        <TouchableOpacity key={skill.id} onPress={() => setSelected(skill.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selected === skill.id ? (
                <View style={styles.radioCircle}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{skill.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  //   main: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  radioText: {
    fontSize: 18,
    color: 'black',
  },
  radio: {
    width: 40,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 15,
    margin: 3,
  },
});
