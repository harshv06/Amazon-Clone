import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const Address = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff", marginTop: -10 }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View style={{ backgroundColor: "#00CED1", height: 50 }}></View>

        <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Add a new Address
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="India"
          />
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Full Name (First and Last name)
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Your Name"
          />
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Mobile Number
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Mobile Number"
            keyboardType="numbers-and-punctuation"
          />
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Flat,House No,Building,Company
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Area,Street,Sector,Village
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="India"
          />
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Area,Street,Sector,Village
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="India"
          />
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>Pincode</Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Pincode"
            keyboardType="numeric"
          />
        </View>

        <Pressable
          style={{
            marginHorizontal: 15,
            backgroundColor: "#FFC72C",
            padding: 20,
            borderRadius: 5,
            alignItems: "center",
            marginTop:10
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>Add Address</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({});
