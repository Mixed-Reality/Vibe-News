import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { RootParamsProps } from "../RootParamList";
import { newsType } from "../Types";
import Center from "./Center";

const Home: React.FC<RootParamsProps<"Home">> = ({ navigation }) => {
  // Button press for news sentiment type
  const handleMoodButton = (mood: newsType) => {
    console.log("mood => ", mood);
  };
  
  return (
    <Center>
      <Text style={styles.subText}> What news do you want to read ?</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Posts", {
            newsType: newsType.happy,
            header: "🙂 News",
          });
        }}
      >
        <Text style={(styles.happyBtn, styles.btnText)}> Happy 🙂</Text>
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
        <Text style={(styles.sadBtn, styles.btnText)}> Sad 😓 </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Posts", {
            newsType: newsType.neutral,
            header: " 😓 News",
          })
        }
      >
        <Text style={(styles.neutralBtn, styles.btnText)}> Meh..😐 </Text>
      </TouchableOpacity>
    </Center>
  );
};

const styles = StyleSheet.create({
  subText: {
    width: "100%",
    fontSize: 18,
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
  },
  btnText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },

  happyBtn: {},
  sadBtn: {},
  neutralBtn: {},
});

export default Home;
