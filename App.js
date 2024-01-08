import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator, { BottomTab } from "./Navigation/StackNavigator";
import { Provider } from "react-redux";
import Store from "./Store";
import { ModalPortal } from "react-native-modals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "./userContext";
export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <Provider store={Store}>
      <UserContext>
        <StackNavigator />
        <ModalPortal />
      </UserContext>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
