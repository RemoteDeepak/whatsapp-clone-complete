import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import OTPInput from "@codsod/react-native-otp-input";
import ButtonComp from "@/src/component/atoms/buttonComp";
import { storeData } from "../../utils/utils"; 
import { router } from "expo-router";


const Verification = () => {
  const [otp, setOTP] = useState("");

  const userToken = "dfalkjvafmnlddrigvjdmj"

  const onVerify = async () => {
    console.log("OTP: ", otp);

    if (otp == "3440") {
      try {
        await storeData("userToken", userToken);
        console.log("Data stored successfully");
        // Navigate to the next screen
         router.push("/(main)");
      } catch (error) {
        console.log("Error storing data: ", error);
        
      }
    }else {
      alert("Invalid OTP");
    }
    // Handle OTP verification logic here

    
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerContainer}>
          <Ionicons name="arrow-back" size={35} color="black" />
          <Text style={styles.headerText}>Enter OTP code</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View>
          <Text>Code has been sent to +91 11******44</Text>
        </View>
        <View>
          <OTPInput style={styles.otpContainer}
            length={4}
            onOtpComplete={(txt: string) => setOTP(txt)}
            inputStyle={styles.otpInput}
          />
        </View>
        <View>
          <Text>Resend code in <Text style={{color:"#05AA82"}}>56</Text>s</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title="Verify" style={styles.verifyBtn} onPress={onVerify}/>
      </View>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },

  

  // ========================================= header =============================================

  header: {
    flex: 1,
    paddingVertical: verticalScale(10),
  },

  headerContainer: {
    flexDirection: "row",
    gap: scale(10),
    alignItems: "center",
  },

  headerText: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: "black",
  },

  // ========================================= body =============================================

  body: {
    flex: 1,
    gap: verticalScale(40),
    alignItems: "center",
  },

  otpContainer: {
    gap: moderateScale(10),
  },

  otpInput:{
    width: moderateScale(50),
    height: moderateScale(60),
    borderColor : "black",
    borderRadius  : scale(15),
  },


  // ========================================= footer =============================================

  footer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: verticalScale(40),
  },

  verifyBtn: {
    backgroundColor: "#05AA82",
    borderRadius: scale(50),
    paddingVertical: verticalScale(15),
    
  },
});
