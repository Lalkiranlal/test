import React,{useState} from "react";
 import{TouchableOpacity,Text,View,StyleSheet,TextInput,Button} from 'react-native'
 

export default function AddTodos({submitHandler}){
    const [text,setText] =useState('');
    const changeHandler = (val) =>{
            setText(val);  
    }
    return(
        <View>
        
            <TextInput style={styles.Input}
            placeholder="new todo item........"
            onChangeText={changeHandler}
             />
             <Button
              title="Add todo"
              onPress={() => submitHandler(text)}
             color={'orange'}
             />
        </View>
    )
}
const styles=StyleSheet.create({
    Input:
    {marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
        paddingHorizontal:8,
        paddingVertical:6,

    }
})