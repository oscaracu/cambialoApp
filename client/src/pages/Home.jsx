import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Cabecera from "../components/Cabecera";
import Carrousel from "../components/Carrousel";
import { ScrollView } from "react-native-gesture-handler";
import Login from "../components/Login";


const Home = () => {
  return (
    <Login/>
    // <View className="flex-1 " style={{ backgroundColor: "#EAE0F4" }}>
    //   <Cabecera />
    //   <ScrollView className="flex-1 my-3 ">
    //     <View className="flex-1 ">
    //       <View>
    //         <Text className=" font-black "> Productos </Text>
    //         <Carrousel />
    //       </View>
    //       <View>
    //         <Text className=" font-black "> Servicios </Text>
    //         <Carrousel />
    //       </View>
    //     </View>
    //   </ScrollView>
    // </View>
  );
};


export default Home;
