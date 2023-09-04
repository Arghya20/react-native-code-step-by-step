import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LearnFlatList = () => {
  const users = [
    {
      id: 1,
      name: 'Rahul Roy',
    },
    {
      id: 2,
      name: 'asdfashh',
    },
    {
      id: 3,
      name: 'asdfasdf',
    },
    {
      id: 4,
      name: 'alsjasd',
    },
    {
      id: 5,
      name: 'Rahul rou',
    },
  ];

  return (
    <View>
      <Text>Flat-List</Text>

      {/* <FlatList
        data={users}
        renderItem={({item}) => (
          <Text style={styles.listStyle}>{item.name}</Text>
        )}
        keyExtractor={item => item.id}
      /> */}

      {users.map(item => (
        <Text style={styles.listStyle}>{item.name}</Text>
      ))}
    </View>
  );
};

export default LearnFlatList;

const styles = StyleSheet.create({
  listStyle: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    backgroundColor: '#e4e4e4',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
