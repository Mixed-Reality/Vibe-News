import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { RootParamsProps } from "../RootParamList";
import Center from "./Center";
import { NEWS_API } from "../API";
import { useState } from "react";
import { useEffect } from "react";
import { NewsArticle } from "../Types";
import Loading from "./Loading";
import Post from "./Post";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
// import {} from "vader-sentiment";
const vader = require("vader-sentiment");

const URL = `http://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}`;

const Posts: React.FC<RootParamsProps<"Posts">> = ({ route, navigation }) => {
  const { newsType } = route.params;
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(URL)
      .then((res: any) => res.json())
      .then((data) => setNews(data.articles))
      .then(() => setIsLoading(false));

    return () => {};
  }, []);

  const onPressNavigate = (article: NewsArticle): void => {
    navigation.navigate("Article", { article: article });
  };

  const filteredNews: NewsArticle[] = news.filter((article: NewsArticle) => {
    // We will filter the article according to
    // Vader sentiment score
    const compoundScore = vader.SentimentIntensityAnalyzer.polarity_scores(
      article.title
    ).compound;
    if (newsType === 0) return compoundScore >= 0.05;
    else if (newsType === 1) return compoundScore <= -0.5;
    else if (newsType === 2)
      return compoundScore > -0.05 && compoundScore < 0.05;
  });

  const getNewsTypeStr = () => {
    switch (newsType) {
      case 0:
        return "Happy";
      case 1:
        return "Sad";
      case 2:
        return "Neutral";
    }
  };

  const newsTypeStr = getNewsTypeStr();

  const newsNotFoundMsg: JSX.Element = (
    <Text>
      `We did not find any {newsTypeStr} news for you. Drink Some water and come
      back later🥛 `
    </Text>
  );

  return (
    <Center>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <ScrollView style={styles.container}>
          <Center>
            {filteredNews.length === 0
              ? newsNotFoundMsg
              : filteredNews.map((article: NewsArticle) => (
                  // Return JX of each article object in array
                  <Post
                    article={article}
                    articleType={newsType}
                    key={article.title}
                    onPressNavigate={() => onPressNavigate(article)}
                  />
                ))}
          </Center>
        </ScrollView>
      )}
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },
});

export default Posts;
