import React from "react";

import { StyleSheet, Text, View } from 'react-native';
export default function Header(){
     return(
        <View style={Styles.header}>
            <Text style={Styles.title}>Todo List</Text>
                 </View>
     )

}
const Styles= StyleSheet.create({
    header:{
         height:80,
         backgroundColor:'orange',
         paddingTop:38,
         borderBottomEndRadius:30,
         borderBottomLeftRadius:30,



    },
    title:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        
    }

}) 