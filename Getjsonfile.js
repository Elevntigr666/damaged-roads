import React from 'react'
import mahasiswa from './data/mahasiswa.json';
import {View, FlatList, Text, StyleSheet} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Getjsonfile = () => {
  return (
    <FlatList
  data={mahasiswa}
  renderItem={({ item }) => (
        <View style = {styles.card}>
        <View>
          <FontAwesome5 name={item.icon} size={25} color={item.color} />
        </View>
        <View>
          <Text  style = {styles.cardtitle}>{item.nama}</Text>
          <Text>Nim : {item.nim}</Text>
          <Text>Kelas : {item.kelas}</Text>
          <Text>Jenis Kelamin : {item.jeniskelamin}</Text>
        </View>
      </View>
  )}
/>

  )
}

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      borderRadius: 100,
      width: 80,
    },
    cardtitle: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    card: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })
   
