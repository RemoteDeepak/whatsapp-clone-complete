import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComp from "@/src/component/atoms/buttonComp";
import AntDesign from "@expo/vector-icons/AntDesign";
import CountryPicker from 'react-native-country-picker-modal';

const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState("+91");
  const [countryName, setCountryName] = React.useState("India");

  const onNext = () => {
    router.push('/(auth)/verification'); // Handle the next button press
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>Enter your phone number</Text>
          <Text style={styles.headingDescription}>
            Whatsapp will need to verify your phone number.{" "}
            <Link href={"/"} style={styles.headingLinkDiscription}>
              What's my number?
            </Link>
          </Text>
        </View>

        {/* Input Block */}
        <View>
          {/* Country Dropdown */}
          <TouchableOpacity style={styles.dropDownContainer} onPress={() => setIsVisible(true)}>
            <View/>
            <Text style={styles.dropdownTxt}>{countryName}</Text>
            <AntDesign name="caretdown" size={14} color="black" />
          </TouchableOpacity>

          <View style={styles.horizontalLine} />

          {/* Phone number input */}
          <View style={styles.numberContainer}>
            <View style={styles.ninetyOneContainer}>
              <Text style={styles.ninetyOne}>{countryCode}</Text>
              <View style={styles.horizontalLine} />
            </View>
            <View style={styles.phoneNumberContainer}>
              <TextInput style={styles.phoneNumber} placeholder="Enter phone number" />
              <View style={styles.horizontalLine} />
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <ButtonComp title="Next" style={{ paddingHorizontal: scale(29) }} onPress={onNext} />
      </View>

      {/* Uncomment and configure this for CountryPicker functionality when ready */}
      
      {isVisible && (
        <CountryPicker 
          visible={isVisible}
          withFilter
          onClose={() => setIsVisible(false)}
          onSelect={(e) => {
            setCountryCode("+ " + e.callingCode[0]);
            setCountryName(e.name);
          }} 
          countryCode={"AF"} 
        />
      )}
     
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(70),
    paddingHorizontal: moderateScale(40),
    alignItems: "center",
    backgroundColor: "white",
  },

  header: {
    gap: verticalScale(70),
  },

  headingContainer: {
    gap: verticalScale(25),
  },

  headingTxt: {
    textAlign: "center",
    fontSize: moderateScale(20),
    fontWeight: "900",
    color: "black",
  },
  headingDescription: {
    textAlign: "center",
    fontSize: moderateScale(12),
  },

  headingLinkDiscription: {
    color: "#007AFF",
  },

  dropDownContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
  },

  dropdownTxt: {
    fontWeight: "bold",
    fontSize: moderateScale(16),
    color: "black",
  },

  horizontalLine: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05AA82",
  },

  numberContainer: {
    flexDirection: "row",
    gap: scale(20),
    alignItems: "center",
  },

  ninetyOneContainer: {},

  ninetyOne: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "black",
    width: "100%",
    paddingVertical: verticalScale(7),
    paddingHorizontal: scale(10),
  },

  phoneNumberContainer: {
    flex: 1,
    paddingVertical: verticalScale(10),
  },

  phoneNumber: {
    fontSize: moderateScale(16),
    color: "black",
    fontWeight: "400",
    paddingVertical: verticalScale(7),
  },

  button: {
    paddingHorizontal: scale(30),
  },

  footer: {},
});
