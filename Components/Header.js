import { StyleSheet, Text, View,Pressable,TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#00CED1",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          width: "90%",
          borderRadius: 5,
        }}
      >
        <Feather
          name="search"
          size={30}
          color="black"
          style={{ marginVertical: 10, left: 0, marginLeft: 10 }}
        />
        <TextInput
          style={{ width: "100%", padding: 10 }}
          placeholder="Search"
          placeholderTextColor={"gray"}
        />
      </Pressable>
      <MaterialCommunityIcons
        name="microphone-outline"
        size={35}
        color="black"
        style={{ marginVertical: 10 }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
