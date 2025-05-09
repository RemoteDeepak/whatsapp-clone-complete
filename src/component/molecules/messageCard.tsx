import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";

const MessageCard = ({ image, name, description, time, badge, logoComponent, RightIcon}: any) => {
  return (
    <TouchableOpacity style={styles.container} >
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Image source={image} style={styles.imgStyle} />
          {logoComponent}
        </TouchableOpacity>
        <View>
          <Text style={styles.NameStyle}>{name}</Text>
          <Text style={styles.descriptionStyle}>{description}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.timeStyle}>{time}</Text>
        {!!badge && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeTxt}>{badge}</Text>
          </View>
        )}
        {RightIcon}
      </View>
    </TouchableOpacity>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    backgroundColor: "white",
    height: scale(70),
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  imgStyle: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
  },
  NameStyle: {
    fontSize: scale(14),
    fontWeight: "700",
    color: "#000",
  },
  descriptionStyle: {
    fontSize: scale(12),
    fontWeight: "400",
    color: "grey",
  },
  timeStyle: {
    fontSize: scale(12),
    fontWeight: "400",
    color: "grey",
  },
  rightContainer: {
    alignItems: "flex-end",
    gap: verticalScale(10),
  },
  badgeContainer: {
    height: scale(20),
    width: scale(20),
    backgroundColor: "#05AA82",
    borderRadius: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTxt: {
    fontSize: scale(12),
    fontWeight: "700",
    color: "#fff",
  },
});
