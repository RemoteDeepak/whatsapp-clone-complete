import { ActivityIndicator, StyleSheet, View,} from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootLayOut = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  React.useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          setIsLogin(true);
        } else {
          setIsLogin(false); 
        }
      }catch (error) {
        console.log("Error checking login status: ", error);
      }finally{
        setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="green" />
    </View>
    ) // or a loading spinner
  }

  return (
    <>
      <Stack screenOptions={{headerShown:false}}/>
      {isLogin ? <Redirect href={'/(main)'} /> : <Redirect href={'/(auth)'} />}
    </>
  )
}

export default RootLayOut

const styles = StyleSheet.create({})