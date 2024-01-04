import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartReducer";

const ProductsItem = ({ item }) => {

  const dispatch = useDispatch();
  const [itemAdd, setItemAdd] = useState(false);

  const addItemsToCart = (item) => {
    setItemAdd(true)
    dispatch(addToCart(item));
    setTimeout(()=>{
        setItemAdd(false)
    },5000)
  };
  return (
    <Pressable style={{ margin: 20 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 150, height: 200, resizeMode: "contain" }}
      />
      <Text
        numberOfLines={2}
        style={{ width: 150, marginTop: 10, fontWeight: "500" }}
      >
        {item.title}
      </Text>
      <View
        style={{
          marginTop: 6,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>₹{item.price}</Text>
        <Text style={{ color: "#FFC72C", fontWeight: "700" }}>
          {item.rating.rate} Ratings
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "#FFC72C",
          borderRadius: 10,
          alignItems: "center",
          padding: 15,
          marginTop: 10,
        }}
        onPress={() => {
          addItemsToCart(item);
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "600",
          }}
        >
          {itemAdd ? "Added To Cart" : "Add To Cart"}
        </Text>
      </Pressable>
    </Pressable>
  );
};

export default ProductsItem;

const styles = StyleSheet.create({});
