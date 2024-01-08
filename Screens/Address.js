import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { decode } from "base-64";
import "core-js/stable/atob";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addUserId } from "../Redux/UserReducer";
import { UserContext, UserType } from "../userContext";

const Address = () => {
  const [name, setName] = useState("");
  const [mobileNo, setPhoneNumber] = useState("");
  const [houseNo, setFlat] = useState("");
  const [street, setArea] = useState("");
  const [landMark, setLandmark] = useState("");
  const [postalCode, setPincode] = useState("");
  const {userId, setUserId} = useContext(UserType)
  const [Uid,setUid]=useState("")
  const navigation=useNavigation()
  let uId=""
  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const tokenDecoded = jwtDecode(token);
      uId=tokenDecoded.userId
      setUserId(uId)
      setUid(uId)
    };
    fetchToken();
  }, []);

  const handleAddress = () => {
    const address = {
      name,
      mobileNo,
      houseNo,
      street,
      landMark,
      postalCode,
      Uid
    };

    // if (
    //   address.name == "" ||
    //   // address.street == "" ||
    //   // address.houseNo == "" ||
    //   // address.landMark == "" ||
    //   // address.mobileNo == "" ||
    //   // address.postalCode == ""
    // )
    if(address.name==""){
      console.log("Please Fill All Fields");
      return;
    }else{
      fetch('http://192.168.0.104:4000/addAddress',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(address)
      }).then((res)=>res.json()).then((userData)=>{
        console.log(userData)
        setTimeout(()=>{
          Alert.alert("Success","Address added successfully",[{text:'Ok',onPress:()=>navigation.goBack()}])
        },500)
      })
    }
  };
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
            editable={false}
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
            onChangeText={(text) => setName(text)}
            value={name}
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
            onChangeText={(text) => setPhoneNumber(text)}
            value={mobileNo}
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
            onChangeText={(text) => setFlat(text)}
            value={houseNo}
            placeholder="House No-123"
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
            onChangeText={(text) => setArea(text)}
            value={street}
            placeholder="Outer Delhi"
          />
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>Landmark</Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
            onChangeText={(text) => setLandmark(text)}
            value={landMark}
            placeholder="Near Gateway of india"
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
            onChangeText={(text) => setPincode(text)}
            value={postalCode}
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
            marginTop: 10,
          }}
          onPress={() => handleAddress()}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>Add Address</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({});
