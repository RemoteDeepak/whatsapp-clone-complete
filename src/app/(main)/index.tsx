import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { act } from "react";
import Chat from "./chat";
import Calls from "./calls";
import Status from "./status";
import { moderateScale, verticalScale } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const Main = () => {
  const [active, setActive] = React.useState("chat");

  const handleChange = () => {
    switch (active) {
      case "chat":
        return <Chat />;
      case "status":
        return <Status />;
      case "calls":
        return <Calls />;
      default:
        return <Chat />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#05AA82" barStyle="light-content" />
      {/* =============================== Header =========================================== */}
      <View style={styles.whatsappContainer}>
        <Text style={styles.whatsappTxt}>WhatsApp</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => alert("Search")}>
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Setting")}>
            <Entypo name="dots-three-vertical" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* =============================== switch button ==================================== */}
      <View style={styles.headerContaier}>
        {["chat", "status", "calls"].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setActive(item)}
            style={[
              styles.headerButton,
              active === item ? { borderBottomColor: "#fff" } : {},
              {},
            ]}
          >
            <Text style={styles.btnTxt}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* =============================== switch content ==================================== */}
      <View>{handleChange()}</View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  whatsappContainer: {
    backgroundColor: "#05AA82",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: moderateScale(10),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(10),
  },

  whatsappTxt: {
    fontSize: moderateScale(20),
    fontWeight: "900",
    color: "#fff",
  },

  iconContainer: {
    flexDirection: "row",
    gap: moderateScale(20),
    alignItems: "center",
  },

  headerContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(20),
    backgroundColor: "#05AA82",
    alignItems: "center",
    gap: moderateScale(10),
  },
  headerButton: {
    flex: 1,
    paddingVertical: verticalScale(12),
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },

  btnTxt: {
    textAlign: "center",
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
});
