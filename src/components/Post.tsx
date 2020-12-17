import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HappyNews } from "../Colors";
import { NewsArticle } from "../Types";
import Center from "./Center";

interface PostProps {
  article: NewsArticle;
}

const Post: React.FC<PostProps> = ({ article }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}> {article.title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    margin: 2,
    height: "auto",
    backgroundColor: HappyNews,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    padding: 20,
  },
});

export default Post;
