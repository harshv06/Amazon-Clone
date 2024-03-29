import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [errMsg, setErr] = useState(null);
  const [udata, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setErr(null);
  }, []);
  const sendToBackend = () => {
    if (udata.name == "" || udata.password == "" || udata.email == "") {
      setErr("Please Fill all feilds");
      return;
    } else {
      fetch("http://192.168.0.103:4000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(udata),
      })
        .then((res) => res.json())
        .then((userdata) => {
          if (userdata.error) {
            setErr(userdata.error);
          } else {
            console.log(userdata);
            Alert.alert("Success", "Verification Code Sent To User Mail", [
              {
                text: "OK",
                onPress: () => {
                  navigation.navigate("ValidationScreen", {
                    data: userdata.data,
                  });
                },
              },
            ]);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      <ScrollView automaticallyAdjustKeyboardInsets={true} automaticallyAdjustContentInsets={true} style={{flex:1}}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 150, width: 150 }}
            source={{
              uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
            }}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: -12,
              color: "#041E42",
            }}
          >
            Register your Account
          </Text>
        </View>

        {errMsg ? (
          <View style={{ backgroundColor: "#D0D0D0", top: 30, padding: 10 }}>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}
            >
              {errMsg}
            </Text>
          </View>
        ) : null}

        <View style={{ marginTop: 100, gap: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <SimpleLineIcons
              name="user"
              size={30}
              color="gray"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              value={udata.name}
              style={{ width: 280, height: 40 }}
              placeholder="Enter your Name"
              onChangeText={(text) => setData({ ...udata, name: text })}
              onFocus={() => setErr(null)}
            ></TextInput>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Fontisto
              name="email"
              size={30}
              color="gray"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              value={udata.email}
              style={{ width: 280, height: 40 }}
              placeholder="Enter your Email"
              onChangeText={(text) => setData({ ...udata, email: text })}
              onFocus={() => setErr(null)}
            ></TextInput>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <AntDesign
              name="lock1"
              size={30}
              color="gray"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              value={udata.password}
              secureTextEntry={true}
              placeholder="Enter your Password"
              onChangeText={(text) => setData({ ...udata, password: text })}
              onFocus={() => setErr(null)}
              style={{ width: 280, height: 40 }}
            ></TextInput>
          </View>
        </View>

        <View style={{ marginTop: 80 }}>
          <Pressable
            style={{
              backgroundColor: "#FEBE10",
              alignItems: "center",
              width: 200,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() => {
              sendToBackend();
            }}
          >
            <Text
              style={{
                fontSize: 17,
                textAlign: "center",
                color: "white",
                fontWeight: "500",
              }}
            >
              Register
            </Text>
          </Pressable>

          <Pressable
            style={{ marginTop: 15, alignItems: "center" }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={{ color: "gray" }}>
              Already have a account ? Login in
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});

// const RegisterScreen = () => {
//

//   };
//   return (
//
//   );
// };

// export default RegisterScreen;
