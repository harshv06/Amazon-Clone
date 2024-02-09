import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../Components/Header";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { UserType } from "../userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const fetchaddress = () => {
    let id = userId;
    console.log("Running",id);
    console.log(typeof(id));
    try {
      fetch(`http://192.168.0.103:4000/getAddress/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Response:",res)
        })
        .then((add) => {
          console.log(add);
          setAddress(add);
        });
    } catch {
      console.log("Failed");
    }
  };

  useEffect(()=>{
    fetchaddress()
  },[])
  useFocusEffect(
    useCallback(() => {
      fetchaddress();
    }, [])
  );
  return (
    <SafeAreaView>
      <Header />

      <View style={{ marginVertical: 15, marginHorizontal: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Your Addresses</Text>
      </View>
      <Pressable
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}
        onPress={() => navigation.navigate("Address")}
      >
        <Text style={{ marginLeft: 8 }}>Add a new Address</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({});
