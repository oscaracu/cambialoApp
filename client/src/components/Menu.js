import React, { useRef, useState, useEffect, Children } from "react";
import Acercade from "../pages/Acercade";
import Contacto from "../pages/Contacto";
import MiPerfil from "../pages/MiPerfil";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Filtros from "./Filtros";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action";

const Menu = ({ children }) => {
  const user = useSelector((state) => state.user);
  const drawer = useRef(null);
  const dispatch = useDispatch();
  const [drawerPosition, setDrawerPosition] = useState("right");
  // const changeDrawerPosition = () => {
  //   if (drawerPosition === 'left') {
  //     setDrawerPosition('right');
  //   } else {
  //     setDrawerPosition('left');
  //   }
  // };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener("state", (event) => {
        const ind = event.data.state?.index;
        setCurrentScreen(ind);
      });

      return unsubscribe;
    }, [navigation])
  );

  useEffect(() => {}, [navigation, currentScreen]);
  const openDrawer = () => {
    drawer.current.openDrawer();
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    drawer.current.closeDrawer();
    setIsDrawerOpen(false);
  };

  /* useEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => (
        <Pressable
          style={{ marginRight: 10 }}
          onPress={() => (isDrawerOpen ? closeDrawer() : openDrawer())}>
          <Image source={Logo} style={styles.imageLogo} />
        </Pressable>
      ),
    });
  }, [navigation, isDrawerOpen, props]); */

  const NavigationView = () => (
    <View className="bg-slate-200 flex-1 relative  ">
      <Image source={require("../images/logo.png")} style={styles.image} />
      <View style={{ backgroundColor: "#3D2851" }} className="p-5">
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Perfil", user.user.user_id);
            closeDrawer();
          }}
        >
          <Text style={styles.text}>Mi Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Acercade");
            closeDrawer();
          }}
        >
          <Text style={styles.text}>Acerca de Cambialo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Contacto");
            closeDrawer();
          }}
        >
          <Text style={styles.text}>Contacto</Text>
        </TouchableOpacity>
        {/* <View style={styles.button}>
          <Filtros />
        </View> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(logout())}
        >
          <Text style={styles.text}>Cerrar sesion</Text>
        </TouchableOpacity>
      </View>
      <View style={{ left: "30%" }} className="absolute bottom-20">
        <TouchableOpacity
          style={styles.buttonCerrar}
          className="rounded-3xl  px-8 "
          onPress={() => closeDrawer()}
        >
          <Text className="font-bold " style={styles.text}>
            CERRAR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCerrar}
          className="rounded-3xl px-8 mt-3"
          onPress={() => {
            navigation.navigate("Publicar");
            closeDrawer();
          }}
        >
          <Text className="font-bold " style={styles.text}>
            PUBLICA +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      <View className="relative" style={styles.container}>
        {currentScreen !== undefined && currentScreen !== 0 ? (
          <TouchableOpacity
            className="absolute top-10 left-5"
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={35} color="#fff" />
          </TouchableOpacity>
        ) : (
          ""
        )}

        <TouchableOpacity
          style={{ marginRight: 15, paddingBottom: 5 }}
          onPress={() => (isDrawerOpen ? closeDrawer() : openDrawer())}
        >
          <Icon name="menu" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"right"}
        onDrawerClose={() => setIsDrawerOpen(false)}
        onDrawerOpen={() => setIsDrawerOpen(true)}
        renderNavigationView={() => (
          <NavigationView closeDrawer={closeDrawer} />
        )}
      >
        <View style={{ flex: 1, backgroundColor: "blue", height: "100%" }}>
          {children}
        </View>
      </DrawerLayoutAndroid>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3D2851",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    height: "10%",
  },

  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  imageLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3D2851",
    borderRadius: 1,
    padding: 10,
    marginTop: 10,
  },
  text: {
    color: "#ffff",
    textAlign: "center",
  },
  buttonCerrar: {
    backgroundColor: "#3D2851",
    padding: 20,
  },
});

export default Menu;
