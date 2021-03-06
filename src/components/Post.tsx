import { StackNavigationProp } from "@react-navigation/stack";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { happyFontClr, HappyNews, NeutralNews, PrimaryColor } from "../Colors";
import { RootParamsProps, RootStackParamList } from "../RootParamList";
import { NewsArticle } from "../Types";
import Center from "./Center";

interface PostProps {
  article: NewsArticle;
  articleType: 0 | 1 | 2;
  onPressNavigate: any;
}

interface colorFunctionReturn {}

const Post: React.FC<PostProps> = ({
  article,
  articleType,
  onPressNavigate,
}) => {
  // Helper function to set background color of the news container
  const setBackgroundClr = (articleType: 0 | 1 | 2): {} => {
    switch (articleType) {
      case 0:
        return { backgroundColor: "#baffbf", color: "white" };

      case 1:
        return { backgroundColor: "white", color: "black" };

      case 2:
        return { backgroundColor: NeutralNews, color: "white" };
    }
  };

  // Helper function to set text color of news
  const setTextClr = (articleType: 0 | 1 | 2): {} => {
    switch (articleType) {
      case 2:
        return { color: "white" };

      default:
        return { color: "black" };
    }
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...setBackgroundClr(articleType),
      }}
      onPress={onPressNavigate}
    >
      <Text style={{ ...styles.text, ...setTextClr(articleType) }}>
        {" "}
        {article.title}{" "}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 2,
    marginBottom: 2,
    borderColor: happyFontClr,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 13,
    shadowColor: "black", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 6, // Android
  },
  text: {
    // color: "white",
    fontWeight: "bold",
    fontSize: 18,
    padding: 20,
  },
});

export default Post;
