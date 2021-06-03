import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, TextInput , KeyboardAvoidingView, ImageBackground} from 'react-native';

import SearchInput from './components/SearchInput';
import getImage from './utils/getImage'

export default function App() {
  const [city, setCity] = useState('Douala, CM')
  return (
    <KeyboardAvoidingView style={styles.container} 
    behavior= {Platform.OS === 'ios' ? 'padding' : ''}>
    <ImageBackground source={getImage('rain')} imageStyle={styles.bgImage} style={styles.container_image}>
    <Text style={[styles.text_big, styles.text_style]}>{city}</Text>
      <Text style={[styles.text_small,styles.text_style]}>Rainny</Text>
      <Text style={[styles.text_big,styles.text_style]}> 24°</Text>
      <SearchInput placeholder='Search any city' SetCity={setCity}/>
    </ImageBackground>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
    
  },
  text_style:{
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular'
      },
      android:{
        fontFamily:'Roboto',
      }
    }),
    textAlign :'center',
    color:'white'
  },
  text_big:{
    fontSize:30
  },
  text_small : {
    fontSize:18
  },
  container_image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
 
});
