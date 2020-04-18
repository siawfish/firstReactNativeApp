import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/avatar.jpg')} style={styles.image}/>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Name
        </Text>
        <Text style={styles.info}>
          Tony Stark
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Email
        </Text>
        <Text style={styles.info}>
          starkindustries@avengers.heros
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Gender
        </Text>
        <Text style={styles.info}>
          Iron Man
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },

  image: {
    width: 150,
    height: 150,
    borderRadius:75,
    marginTop:150,
    marginBottom:30
  },

  infoContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft:30
  },

  label: {
    paddingVertical:10,
    marginTop:20,
    flex: 2
  },

  info: {
    paddingHorizontal:5,
    paddingVertical:10,
    margin:20,
    flex: 7.5,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 15
  }
});
