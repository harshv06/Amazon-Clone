import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [data,setData]=useState({
    email:"",
    password:""
  })

  const [err,setErr]=useState(null)
  const navigation = useNavigation()

  const handleBackend=()=>{
    if (data.email=="" || data.password==""){
      setErr("Please Fill All Fields")
    }else{
      fetch('http://192.168.0.108:4000/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      }).then(res=>res.json()).then((userdata=>{
        if(userdata.error){
          setErr(userdata.error)
        }else{
          console.log("done")
        }
      }))
    }
  }
  return (
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      <View>
        <Image
          style={{ height: 150, width: 150 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: -12,
              color: "#041E42",
            }}
          >
            LogIn to your Account
          </Text>
        </View>

        {
          err?<View style={{top:30,padding:10,backgroundColor:'#d0d0d0'}}><Text style={{textAlign:'center',fontSize:15,fontWeight:'bold'}}>{err}</Text></View>:null
        }

        <View style={{ marginTop: 100, gap: 40 }}>
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
              style={{ width: 280, height: 40 }}
              placeholder="enter your Email"
              onChangeText={(text) => setData({...data,email:text})}
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
              secureTextEntry={true}
              placeholder="enter your Password"
              onChangeText={(text) => setData({...data,password:text})}
              style={{ width: 280, height: 40 }}
            ></TextInput>
          </View>
        </View>

        <View
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>Keep Me Logged In</Text>
          <Text style={{ color: "#007FFF", fontWeight: "600" }}>
            Forgot Password ?
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
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
            onPress={()=>handleBackend()}
          >
            <Text style={{fontSize:17,textAlign:'center',color:'white',fontWeight:'500'}}>Login</Text>
          </Pressable>

          <Pressable style={{marginTop:15,alignItems:'center'}} onPress={()=>navigation.navigate("RegisterScreen")}>
            <Text style={{color:'gray'}}>Don't have a account ? Sign up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
