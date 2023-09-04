import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const ApiFetchData = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const uri = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(uri);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View>
      <Text>Total data : {data.length}</Text>

      {/* {data.map(item => (
          <View style={styles.card}>
            <Text style={styles.title}>
              {item.id}. {item.title}
            </Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        ))} */}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.title}>
              {item.id}. {item.title}
            </Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ApiFetchData;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#C5F3FA',
    marginHorizontal: 10,
    marginVertical: 12,
    padding: 14,
    borderRadius: 8,
    shadowColor: '#747474',
    elevation: 4,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    color: '#6F6F6F',
  },
});
