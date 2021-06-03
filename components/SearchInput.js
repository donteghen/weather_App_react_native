import React, { useState } from 'react'
import { View , TextInput, StyleSheet, Pressable} from "react-native"

export default function SearchInput ({placeholder, City, SetCity}){
    const [value, setValue] = useState('');
    const handleChange = () =>{
        SetCity(value);
        setValue('')
    }
    return (
        <View style={styles.container}>
            <TextInput autoCorrect={false} placeholder={placeholder} style={styles.input} value={value}
             onChangeText={setValue} onSubmitEditing={handleChange}
            clearButtonMode='always'  placeholderTextColor='white'/>
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
       
    },
    input:{
        flex:1,
        color:'white',
      }
})