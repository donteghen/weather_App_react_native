import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Platform, KeyboardAvoidingView, ImageBackground, Alert, View} from 'react-native';
import {fetchLocationId , fetchWeather} from './utils/api'
import SearchInput from './components/SearchInput';
import getImage from './utils/getImage'

export default function App() {
  const [city, setCity] = useState('london')
  const [weather, setWeather] = useState({})
  useEffect(() =>{
      fetchcity()
  },[city])

  const fetchWeatherStats = async (id) =>{
    try {
      const cityWeather = await fetchWeather(id)
      //console.log(cityWeather.consolidated_weather[0])
      setWeather(cityWeather.consolidated_weather[0])
    } catch (error) {
      console.log(error)
    }
  }
   const fetchcity = async () => {
     try {
      const c = await fetchLocationId(city);
      //console.log(c)
      fetchWeatherStats(c[0].woeid)
      setCity(c[0].title)
     } catch (error) {
       Alert.prompt(error)
     }
   }
  
  return (
    <KeyboardAvoidingView style={styles.container} 
    behavior= {Platform.OS === 'ios' ? 'padding' : ''} >
    <ImageBackground source={getImage(weather.weather_state_name)} imageStyle={styles.bgImage} style={styles.container_image}>
    
      <SearchInput placeholder='Search any city' SetCity={setCity} />
      <View style={{flex:1, justifyContent:'center'}}>
        <Text style={[styles.text_big, styles.text_style]}>{city}</Text>
        <Text style={[styles.text_small,styles.text_style]}>{weather.weather_state_name}</Text>
        <Text style={[styles.text_big,styles.text_style]}> {Math.ceil(weather.the_temp)}°</Text>
      </View>
    </ImageBackground>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 20 : 10,
    paddingTop:Platform.OS === 'android' ? 4 : 2,
    
    
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
    color:'white',
    fontWeight:'bold'
  },
  text_big:{
    fontSize:40
  },
  text_small : {
    fontSize:28
  },
  container_image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
 
});
