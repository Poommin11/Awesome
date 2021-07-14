/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { useState } from "react";
 import { StyleSheet, Text, TouchableOpacity, View ,TextInput, Button, Picker} from "react-native";
 
 const FlexDirectionBasics = () => {
   const [a,setA] = useState('');
   const [b,setB] = useState('');
   const [selectedValue, setSelectedValue] = useState("plus");
   const calculate = () => {
     if(selectedValue=="plus"){
       var result = parseFloat(a)+parseFloat(b)
       alert(a+"+"+b+"="+result)
     } else if(selectedValue=="mins"){
      var result = parseFloat(a)-parseFloat(b)
       alert(a+"-"+b+"="+result)
     } else if(selectedValue=="multiple"){
      var result = parseFloat(a)*parseFloat(b)
       alert(a+"x"+b+"="+result)
     } else if(selectedValue=="divide"){
      var result = parseFloat(a)/parseFloat(b)
       alert(a+"/"+b+"="+result)
     }
   }

   return (
     <View>
          <TextInput 
          style={{height:50, borderColor:'#000000',borderWidth:1,margin:10}}
          placeholder="Number"
          keyboardType="numeric"
          onChangeText={int=> setA(int)}
          />
          <Picker
          selectedValue={selectedValue}
          style={{ height: 50, margin:10 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
          <Picker.Item label="+" value="plus" />
          <Picker.Item label="-" value="minus" />
          <Picker.Item label="x" value="multiple" />
          <Picker.Item label="/" value="divide" />
          </Picker>
          <TextInput 
          style={{height:50, borderColor:'#000000',borderWidth:1,margin:10}}
          placeholder="Number"
          keyboardType="numeric"
          onChangeText={int=> setB(int)}
          />
          <Button style={{margin:10}} title="Click me!!!" onPress={calculate}/>
      </View>
        
   );
 };
 export default FlexDirectionBasics;