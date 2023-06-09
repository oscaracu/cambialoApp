import { View, Text, Image } from "react-native";
import React from "react";
import Logo from "../images/logo.png";
import SearchBar from "./SearchBar";

const Cabecera = () => {
  return (
    <View style={{ backgroundColor: "#EAE0F4", paddingBottom: 5 }}>
    <View
      style={{ backgroundColor: "#3D2851" }}
      className="rounded-b-full h-40 justify-center items-center ">
      <Image className="w-28 h-28 " source={Logo} />
      <SearchBar />
    </View>
    </View>
  );
};

export default Cabecera;
