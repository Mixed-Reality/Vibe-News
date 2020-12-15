import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootParamsProps } from "../RootParamList";
import Center from "./Center";

const Posts: React.FC<RootParamsProps<"Posts">> = ({ route, navigation }) => {
  const { newsType } = route.params;
  console.log(process.env.REACT_APP_API);
  return (
    <Center>
      <Text style={styles.header}> 🙂 News </Text>
    </Center>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Posts;
