import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import ValidationScreen from '../Screens/ValidationScreen'
import HomeScreen from '../Screens/HomeScreen'
import ProductInfoScreen from '../Screens/ProductInfoScreen'

const StackNavigator = () => {
    const stack=createNativeStackNavigator() 
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
            <stack.Screen name='Info' component={ProductInfoScreen} options={{headerShown:false}}/>
            <stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false}}/>
            <stack.Screen name='ValidationScreen' component={ValidationScreen} options={{headerShown:false}}/>
            <stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})