import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Platform, KeyboardAvoidingView, ImageBackground, Alert, View} from 'react-native';
import {fetchLocationId } from './utils/api'
import SearchInput from './components/SearchInput';
import getImage from './utils/getImage'

export default function App() {
  const [city, setCity] = useState('london')
  useEffect(() =>{
      fetchcity()
  })
   const fetchcity = async () => {
     try {
      const c = await fetchLocationId(city);
      //console.log(c)
      setCity(c[0].title)
     } catch (error) {
       Alert.prompt(error)
     }
   }
  
  return (
    <KeyboardAvoidingView style={styles.container} 
    behavior= {Platform.OS === 'ios' ? 'padding' : ''} >
    <ImageBackground source={getImage('rain')} imageStyle={styles.bgImage} style={styles.container_image}>
    <View style={{flex:1, justifyContent:'center'}}>
    <Text style={[styles.text_big, styles.text_style]}>{city}</Text>
      <Text style={[styles.text_small,styles.text_style]}>Rainny</Text>
      <Text style={[styles.text_big,styles.text_style]}> 24°</Text>
    </View>
      <SearchInput placeholder='Search any city' SetCity={setCity} />
    </ImageBackground>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
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
