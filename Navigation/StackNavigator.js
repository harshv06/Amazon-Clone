import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import ValidationScreen from "../Screens/ValidationScreen";
import HomeScreen from "../Screens/HomeScreen";
import ProductInfoScreen from "../Screens/ProductInfoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../Screens/CartScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import AddAddressScreen from "../Screens/AddAddressScreen";
import Address from "../Screens/Address";


const StackNavigator = () => {
  function BottomTab() {
    const tab = createBottomTabNavigator();
    return (
        <tab.Navigator>
          <tab.Screen
            options={{
              headerShown: false,
              tabBarLabelStyle: { color: "#008E97" },
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <AntDesign name="home" size={24} color="#008E97" />
                ) : (
                  <AntDesign name="home" size={24} color="black" />
                ),
            }}
            name="Home"
            component={HomeScreen}
          />
  
          <tab.Screen
            options={{
              headerShown: false,
              tabBarLabelStyle: { color: "#008E97" },
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person-outline" size={24} color="#008E97" />
                ) : (
                  <Ionicons name="person-outline" size={24} color="black" />
                ),
            }}
            name="Profile"
            component={ProfileScreen}
          />
          <tab.Screen
            options={{
              headerShown: false,
              tabBarLabelStyle: { color: "#008E97" },
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <AntDesign name="shoppingcart" size={24} color="#008E97" />
                ) : (
                  <AntDesign name="shoppingcart" size={24} color="black" />
                ),
            }}
            name="Cart"
            component={CartScreen}
          />
        </tab.Navigator>
    );
  }
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Main"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Info"
          component={ProductInfoScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="ValidationScreen"
          component={ValidationScreen}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name="AddAddress"
          component={AddAddressScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Address"
          component={Address}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
// export function BottomTab()

export default StackNavigator;

const styles = StyleSheet.create({});
