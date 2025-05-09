import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import imagesPath from "@/src/constants/imagesPath";
import { Link } from "expo-router";
import ButtonComp from "@/src/component/atoms/buttonComp";
import { useRouter } from "expo-router";

const TermsAgreement = () => {
  const router = useRouter();
  const onAgree = () => {
    router.push('/login'); // Handle the agree button press
  };
   return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeTxt}>Welcome to WhatsApp</Text>
        <Image source={imagesPath.welcomeimg} style={styles.welcomeImg} />
        <Text style={styles.policyTxt}>
          Read our{" "}
          <Link href={"/"} style={{ color: "blue" }}>
            Privacy Policy.
          </Link>{" "}
          Tap "Agree and continue" to accept the{" "}
          <Link href={"/"} style={{ color: "blue" }}>
            Terms of Service.
          </Link>
        </Text>
        <View style={{ width:moderateScale (300)}}>
          <ButtonComp title="AGREE AND CONINUE" onPress={onAgree} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.fromTxt}>From</Text>
        <Text style={styles.facebookTxt}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};

export default TermsAgreement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(35),
  },

  header: {
    alignItems: "center",
    width: "100%",
    gap: verticalScale(20),
  },

  footer: {
    alignItems: "center",
    width: "100%",
  },

  fromTxt: {
    fontSize: moderateScale(12),
    color: "#867373 ",
  },

  facebookTxt: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // header styles

  welcomeTxt: {
    fontSize: moderateScale(24),
    fontWeight: "900",
    color: "black",
  },

  welcomeImg: {
    width: scale(250),
    height: verticalScale(250),
    borderRadius: moderateScale(10),
    resizeMode: "contain",
  },

  policyTxt: {
    textAlign: "center",
    fontSize: moderateScale(12),
    color: "black",
    lineHeight: verticalScale(20),
  },
});
