import React from "react";
 import{TouchableOpacity,Text,View,StyleSheet} from 'react-native'
 
 export default function TodoItem({ item, pressdelete }) {
   return (
     <TouchableOpacity key={item.key} onPress={() => pressdelete(item.key)}>
       <Text style={styles.items}>{item.text}</Text>
     </TouchableOpacity>
   );
 }
 
 const styles=StyleSheet.create({
    items:{
        padding:16,
         borderColor:'#bbb',
         marginTop:10,
         borderWidth:1,
         borderRadius:10,
         borderStyle:'dotted'
    }
     
 })