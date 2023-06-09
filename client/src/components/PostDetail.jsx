import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import DetailsImage from "./DetailsImage";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const PostDetail = ({ data }) => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        top: 0,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
        margin: 10,
      }}
    >
      {data.vendedor_id.user_id === user.user_id ? (
        <View className="flex flex-row justify-center items-center">
          <TouchableOpacity
            style={{
              backgroundColor: "#27B90F",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
              marginLeft: 5,
              marginRight: 0,
              marginBottom: 5,
              width: "25%",
              shadowOpacity: 0.17,
              shadowRadius: 2.54,
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Editar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#E40303",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 5,
              width: "25%",
              shadowOpacity: 0.17,
              shadowRadius: 2.54,
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Eliminar
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#eae0f4",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 8,
            width: "95%",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {data.titulo}
          </Text>
        </TouchableOpacity>

        {/* <Image
          style={{
            borderRadius: 10,
            marginTop: 10,
            marginBottom:20,
            width: 300,
            height: 300,
          }}
          source={
            data.fotos[0]
              ? { uri: data.fotos[0] }
              : require("../images/Image.jpg")
          }
        /> */}
        <View
          style={{
            borderRadius: 12,
            alignItems: "center",
            height: 400,
            width: 400,
          }}
        >
          <DetailsImage data={data.fotos} />
        </View>

        <View
          className="flex flex-row justify-center"
          style={{
            width: "100%",
          }}
        >
          {data.venta ? (
            <TouchableOpacity
              style={{
                backgroundColor: "#9874BA",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 5,
                width: "30%",
                shadowOpacity: 0.17,
                shadowRadius: 2.54,
                elevation: 3,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Compra
              </Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
          {data.trueque ? (
            <TouchableOpacity
              style={{
                backgroundColor: "#9874BA",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                width: "30%",
                shadowOpacity: 0.17,
                shadowRadius: 2.54,
                elevation: 3,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Trueque
              </Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </View>
        <View>
          <Text
            style={{
              color: "black",
              margin: 10,
              fontSize: 15,
              fontFamily: "roboto-regular",
            }}
          >
            {data.descripcion}
          </Text>
        </View>
        {data.trueque ? (
          <View className="flex items-center">
            <Text className="font-semibold">Condiciones de intercambio:</Text>
            <Text>{data.condiciones_intercambio}</Text>
          </View>
        ) : null}
      </View>
      {data.venta ? (
        <View className="flex justify-center items-center mb-3">
          <Text>Precio de venta:</Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "roboto-bold",
            }}
          >
            {data.precio}
          </Text>
        </View>
      ) : null}
      {/* <TextInput
        multiline={true}
        numberOfLines={4}
        placeholder={"Ingrese su texto..."}
        style={{
          height: 150,
          textAlignVertical: "top",
          paddingLeft: 8,
          paddingTop: 8,
          borderColor: "#000000",
          shadowOpacity: 0.17,
          shadowRadius: 2.54,
          elevation: 3,
          marginBottom: 10,
        }}
      /> */}
      <View className="flex justify-center items-center mb-3">
        <TouchableOpacity
          style={{
            backgroundColor: "#9874BA",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
            marginBottom: 10,
            width: "50%",
            height: 50,
            shadowOpacity: 0.17,
            shadowRadius: 2.54,
            elevation: 3,
          }}
          onPress={() => navigation.navigate("Chat")}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Chatear
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostDetail;
