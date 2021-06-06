import React, { useEffect, useState } from 'react'
import { View , TextInput, StyleSheet, FlatList} from "react-native"
import {fetchLocationId } from '../utils/api'
import Item from './ListItem';

export default function SearchInput ({placeholder, SetCity}){
    const [value, setValue] = useState('');
    const [cityOptions,  setCityOptions] = useState([])
    useEffect(() =>{
        //console.log(value)
        fetchcities()
    }, [value])
    const handleChange = (text) =>{
        if(text.length >= 1) {
            setValue(text)
        }
        if(text.length === 0 ){
            setCityOptions([])
        }
    }
    const fetchcities = async () => {
        //console.log(value, 'jjjj')
        try {
            const cities = await fetchLocationId(value);
            setCityOptions(cities)
            
        } catch (error) {
            //Alert.alert(error)
            return 
        }
     }
     const renderItem = ({item}) => <Item title={item.title} setItem={SetCity} SetOptions={setCityOptions}/>
    return (
        <View style={{flex:1}}>
        <View style={styles.container}>
            <TextInput autoCorrect={false} placeholder={placeholder} style={styles.input} 
             onChangeText={handleChange} 
              placeholderTextColor='white'/>
            
        </View>
       
           {  cityOptions.length > 0 && <FlatList style={{backgroundColor:'#666a',}}
                data={cityOptions}
                renderItem={renderItem}
                keyExtractor={item => String(item.woeid)}
            />}
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor:'#666a',
        width:300,
        height:40,
        borderRadius:5,
        marginHorizontal:5,
        paddingHorizontal:10,
        alignSelf:'center',
        marginBottom:4
    },
    input:{
        flex:1,
        color:'white',
      }
})