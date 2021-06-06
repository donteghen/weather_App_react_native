import React from 'react'
import {View, Pressable, StyleSheet, Text} from 'react-native'

export default function Item ({ title, setItem, SetOptions}) {
    return <View style={{ margin:4, padding:4}}>
            <Pressable style={{ margin:2, padding:4,borderRadius:5, borderColor:'black', backgroundColor:'#fff'}} 
            onPress={() =>{
                setItem(title);
                SetOptions([])
            }} >
            <Text style={{fontSize:19, textAlign:'center', margin:2, padding:2}}>{title}</Text>
            </Pressable>
            </View>
}

const styles = StyleSheet.create({

})