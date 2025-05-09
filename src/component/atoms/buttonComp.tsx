 import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
 import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
 
 const ButtonComp = ({title, onPress, style}: any) => {
   return (
     <TouchableOpacity style={[styles.buttonContainer, style]} activeOpacity={0.6} onPress={onPress}>
       <Text style={styles.buttonTxt}>{title}</Text>
     </TouchableOpacity >
   )
 }
 
 export default ButtonComp
 
 const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#00A884',
      paddingVertical: moderateScale(10),
      paddingHorizontal: scale(10),
      borderRadius: moderateScale(4),
    },

    buttonTxt: {
      color: 'white',
      fontSize: moderateScale(14 ),
      fontWeight: 'bold',
      textAlign: 'center',
    },
})