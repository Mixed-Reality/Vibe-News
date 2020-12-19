import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { happyFontClr, HappyNews, NeutralNews, PrimaryColor } from "../Colors";
import { RootParamsProps } from "../RootParamList";
import { newsType } from "../Types";
import Center from "./Center";

const Home: React.FC<RootParamsProps<"Home">> = ({ navigation }) => {
  // Button press for news sentiment type

  return (
    <Center>
      <Text style={styles.subText}> What news do you want to read ?</Text>

      <TouchableOpacity
        style={{ ...styles.btn, backgroundColor: PrimaryColor }}
        onPress={() => {
          navigation.navigate("Posts", {
            newsType: newsType.happy,
            header: "🙂 News",
          });
        }}
      >
        <Text style={{ ...styles.btnText, color: "black" }}> Happy 🙂</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Posts", {
            newsType: newsType.sad,
            header: "😓  News",
          })
        }
      >
        <Text style={(styles.sadBtn, styles.btnText)}> Sad 😢 </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.btn, backgroundColor: NeutralNews }}
        onPress={() =>
          navigation.navigate("Posts", {
            newsType: newsType.neutral,
            header: " 😢 News",
          })
        }
      >
        <Text
          style={{
            ...styles.btnText,
            color: "white",
          }}
        >
          {" "}
          Meh..😐{" "}
        </Text>
      </TouchableOpacity>
    </Center>
  );
};

const styles = StyleSheet.create({
  subText: {
    width: "100%",
    fontSize: 24,
    color: "black",
    margin: 30,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    width: "90%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    margin: 4,
    borderRadius: 16,
    shadowColor: "black", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 6, // Android
  },
  btnText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },

  happyBtn: {},
  sadBtn: {},
  neutralBtn: {},
});

export default Home;
