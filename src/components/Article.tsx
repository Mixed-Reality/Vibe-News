import React from "react";
import { View, Text } from "react-native";
import { ArtcileScreenProps, RootParamsProps } from "../RootParamList";
import { NewsArticle } from "../Types";

const Article: React.FC<ArtcileScreenProps<"Article">> = ({
  route,
  navigation,
}) => {
  const article = route.params.article;
  return (
    <View>
      <Text>{article.title}</Text>
    </View>
  );
};

export default Article;
