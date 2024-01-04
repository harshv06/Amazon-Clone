import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ValidationScreen = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  const [err, setErr] = useState(null);
  const [actualCode, setActualCode] = useState("");
  useEffect(() => {
    setActualCode(data[3]);
  },[]);

  checkCode = (code) => {
    if (code == actualCode) {
      setErr(null);
      console.log("Done");
      const Data = {
        name: data[0],
        email: data[1],
        password: data[2],
        Verified: true,
      };
      fetch("http://192.168.0.104:4000/register", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(Data),
      })
        .then((res) => res.json())
        .then((userData) => {
          console.log("here")
          if (userData.error) {
            setErr(userData.error);
            return;
          } else {
            Alert.alert("Verified", "Please Login to continue", [
              {
                text: "Ok",
                onPress: () => {
                  navigation.navigate("LoginScreen");
                },
              },
            ]);
          }
        });
    } else {
      setErr(true);
      console.log("Not Done");
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 150, width: 150 }}
            source={{
              uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
            }}
          />

          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
            Please Verify Your Account
          </Text>
          <Text style={{ marginTop: 15, fontWeight: "500" }}>
            Enter The OTP which has been sent to your email
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <OTPInputView
            style={{ width: "80%", height: 250 }}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={
              err ? styles.underlineStyleBaseRed : styles.underlineStyleBase
            }
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            selectionColor="black"
            keyboardAppearance="dark"
            onCodeChanged={(code) => {
              if (err) {
                if (code.length != 6) setErr(null);
              }
            }}
            onCodeFilled={(code) => {
              checkCode(code);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ValidationScreen;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "red",
  },

  underlineStyleBaseRed: {
    color: "black",
    borderColor: "red",
  },
  underlineStyleBase: {
    color: "black",
  },

  underlineStyleHighLighted: {},

  //   borderStyleBaseRed: {
  //     width: 30,
  //     height: 45,
  // 	borderWidth:2,
  // 	borderColor:'red'
  //   },
});
