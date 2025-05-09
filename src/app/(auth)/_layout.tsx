import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const LayoutAuth = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='termsAgreement' />
        <Stack.Screen name='login' />
        <Stack.Screen name='verification' />
    </Stack>
  )
}

export default LayoutAuth

const styles = StyleSheet.create({})