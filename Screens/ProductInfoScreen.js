import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartReducer";
import Animated, { useSharedValue, withRepeat, withSpring, withTiming } from "react-native-reanimated";
import SelectDropdown from "react-native-select-dropdown";


const ProductInfoScreen = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  const dispatch = useDispatch();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [cartItems, setCartItems] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const addItem = (item) => {
    const modifiedItem={
      ...item,
      Total:cartItems
    }
    dispatch(addToCart(modifiedItem));
  };
  // console.log(cart[0].quantity)
  const PressBtn = Animated.createAnimatedComponent(Pressable);
  const textScale=useSharedValue(1)
  const dot1=useSharedValue(0)
  const dot2=useSharedValue(0)
  const dot3=useSharedValue(0)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {routes.params.carouselImages.map((item, index) => (
            <ImageBackground
              key={index}
              source={{ uri: item }}
              style={{ width, height, justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Pressable
                  style={{
                    margin: 20,
                    backgroundColor: "#E0E0E0",
                    opacity: 0.5,
                    padding: 10,
                    borderRadius: 100,
                  }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
                <Pressable
                  style={{
                    margin: 20,
                    backgroundColor: "#E0E0E0",
                    padding: 10,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.5,
                    right: -10,
                  }}
                >
                  <Ionicons name="share-outline" size={24} color="black" />
                </Pressable>
              </View>

              <View
                style={{
                  margin: 20,
                  backgroundColor: "#E0E0E0",
                  padding: 10,
                  borderRadius: 50,
                  width: 45,
                  height: 45,
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0.5,
                  bottom: -10,
                }}
              >
                <FontAwesome name="heart-o" size={24} color="black" />
              </View>
            </ImageBackground>
          ))}
        </ScrollView>

        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <Text style={{ fontWeight: "600" }}>{routes.params.title}</Text>
          <Text style={{ fontWeight: "700", marginTop: 10, fontSize: 18 }}>
            ₹{routes.params.price}
          </Text>
        </View>

        <View
          style={{ backgroundColor: "gray", height: 2, marginTop: 15 }}
        ></View>

        <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15 }}>Color: </Text>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              {routes.params.color}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ fontSize: 15 }}>Size: </Text>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              {routes.params.size}
            </Text>
          </View>
        </View>

        <View
          style={{ backgroundColor: "gray", height: 2, marginTop: 15 }}
        ></View>

        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 17 }}>Total: </Text>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              ₹{routes.params.price}
            </Text>
          </View>
          <Text
            style={{
              color: "#00CED1",
              fontWeight: "500",
              fontSize: 15,
              marginTop: 7,
            }}
          >
            FREE delivery Tommorow by 7 PM Order within 10hrs 30 mins{" "}
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo name="location-pin" size={24} color="black" />
          <Text style={{ fontWeight: "600" }}>Deliver to Harsh - 411028</Text>
        </View>

        <Text
          style={{
            marginHorizontal: 15,
            marginVertical: 10,
            color: "green",
            fontWeight: "700",
          }}
        >
          IN STOCK
        </Text>

        <SelectDropdown
          data={numbers}
          onSelect={(item,idx)=>{
            setCartItems(item)
            console.log("Cart Items:",cartItems,item)
          }
        }
          defaultValue={0}
          buttonStyle={{height:40,marginHorizontal:20,borderRadius:10,marginVertical:10,width:350}}
          rowStyle={{width:340}}
          selectedRowStyle={{borderWidth:1,borderColor:'black'}}
          dropdownStyle={{width:340,alignItems:'center'}}
        />
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <PressBtn
            // onPress={() => addItem(routes.params.item)}
            onPress={() => {
              textScale.value=withTiming(0,{duration:200})
              addItem(routes.params.item)
              dot1.value=withRepeat(withTiming(1,{duration:800}),3)
              setTimeout(()=>dot2.value=withRepeat(withTiming(1,{duration:800}),3),100)
              setTimeout(()=>dot3.value=withRepeat(withTiming(1,{duration:800}),3),200)
              setTimeout(()=>{
                dot1.value=0
                dot2.value=0
                dot3.value=0
                textScale.value=1
              },2000)
            }}
            style={{
              backgroundColor: "#FFAC1C",
              padding: 15,
              alignItems: "center",
              width: "90%",
              borderRadius: 30,
            }}
          >
            <Animated.Text style={{transform:[{scale:textScale}]}}>Add To Cart</Animated.Text>
            <View style={{width:40,height:10,flexDirection:'row',justifyContent:'space-evenly',position:'absolute',top:20}}>
              <Animated.View style={{backgroundColor:'gray',height:8,width:8,borderRadius:100,transform:[{scale:dot1}]}}></Animated.View>
              <Animated.View style={{backgroundColor:'gray',height:8,width:8,borderRadius:100,transform:[{scale:dot2}]}}></Animated.View>
              <Animated.View style={{backgroundColor:'gray',height:8,width:8,borderRadius:100,transform:[{scale:dot3}]}}></Animated.View>
            </View>
          </PressBtn>

          <Pressable
            style={{
              backgroundColor: "#FFAC1C",
              padding: 15,
              alignItems: "center",
              width: "90%",
              borderRadius: 30,
              marginTop: 20,
            }}
          >
            <Text>Buy Now</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
