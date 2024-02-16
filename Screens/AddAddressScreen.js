import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../Components/Header";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { UserType } from "../userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const fetchaddress = () => {
    let id = userId;
    try {
      fetch(`http://192.168.0.105:4000/getAddress/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((add) => {
          console.log(add.address);
          setAddress(add.address);
          console.log(address);
        });
    } catch {
      console.log("Failed");
    }
  };

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
      <View style={{ marginHorizontal: 10 }}>
        <Pressable
          style={{
            marginTop: 5,
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

        <ScrollView style={{ marginTop: 10 }}>
          {address?.map((item, index) => (
            <View
              key={index}
              style={{
                marginTop: 10,
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
              }}
            >
              <View style={{marginHorizontal:10}}>
                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <Text style={{ fontWeight: "700", fontSize: 18 }}>
                    {item.name}
                  </Text>
                  <Entypo name="location-pin" size={20} color="red" />
                </View>

                <Text>{item.houseNo}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({});
