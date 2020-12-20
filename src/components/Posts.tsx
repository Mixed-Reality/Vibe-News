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

  return (
    <Center>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <ScrollView style={styles.container}>
          <Center>
            {news
              .filter((article: NewsArticle) => {
                console.log(article.title);
                const compoundScore = vader.SentimentIntensityAnalyzer.polarity_scores(
                  article.title
                ).compound;
                console.log(compoundScore);
                if (newsType === 0) return compoundScore >= 0.05;
                else if (newsType === 1) return compoundScore <= -0.5;
                else if (newsType === 2)
                  return compoundScore > -0.05 && compoundScore < 0.05;
              })
              .map((article: NewsArticle) => (
                <Post
                  article={article}
                  articleType={newsType}
                  key={article.title}
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
