import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"

export default function App() {
  return (
    <View style={styles.container}>

        <Image source={require('./assets/avatar.jpg')} style={styles.image}/>
        <View style={styles.iconContainer}>
          <Icon
            name="ios-camera"
            color="#000"
            size={35}
          />
        </View>

      <View style={styles.infoContainer}>
        <Text style={styles.labelDispabled}>
          School
        </Text>
        <Text style={styles.infoDisabled}>
          Codetrain
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.labelDispabled}>
          Email
        </Text>
        <Text style={styles.infoDisabled}>
          mcamanor@gmail.com
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Name
        </Text>
        <TextInput style={styles.info}>
          Kofi Siaw
        </TextInput>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Nickname
        </Text>
        <TextInput style={styles.info}>
          Siawfish
        </TextInput>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Emergency Contant
        </Text>
        <View style={styles.contactIcon}>
          <Icon
              name="ios-contact"
              color="#ffcc33"
              size={20}
            />
        </View>
        <TextInput style={styles.info} editable={false}>
          +233 577 075 706
        </TextInput>
      </View>

      <TouchableOpacity
        style={styles.button}
      >
        <Text>UPDATE PROFILE</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },

  iconContainer: {
    position: 'absolute',
    top: 170,
    left: 215,
    backgroundColor:'#ffcc33',
    paddingHorizontal:5,
    paddingVertical:5,
    height:40,
    borderRadius:20,
    paddingVertical: 3,
    paddingHorizontal:7
  },

  contactIcon: {
    position:'absolute',
    left:270,
    top:50
  },

  image: {
    width: 120,
    height: 120,
    borderColor: '#ffcc33',
    borderWidth: 4,
    borderRadius:60,
    marginTop:100,
    marginBottom:30,
    alignSelf: 'center'
  },

  infoContainer: {
    flexDirection: 'column',
    marginHorizontal:40,
  },

  labelDispabled: {
    paddingVertical:5,
    marginTop:5,
    color: '#333',
    fontSize: 16
  },

  infoDisabled: {
    paddingVertical:5,
    borderBottomColor: 'gray',
    alignSelf: 'flex-start',
    borderBottomWidth: 1,
    width:'100%',
    color: 'grey'
  },

  label: {
    paddingVertical:5,
    marginTop:20,
    color: '#ffcc33'
  },

  info: {
    paddingVertical:10,
    borderBottomColor: 'gray',
    alignSelf: 'flex-start',
    borderBottomWidth: 1,
    width:'100%',
    color: 'grey'
  },

  button: {
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "#ffcc33",
    color: '#000',
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 40,
  }
  
});
