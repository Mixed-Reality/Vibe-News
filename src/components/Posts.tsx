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

  // const NewsArticles = (
  // <ScrollView style={styles.container}>
  //         news.map((article: NewsArticle) => (
  //           <Post article={article} key={article.title} />
  //         ))
  // </ScrollView>
  // )

  return (
    <Center>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <ScrollView style={styles.container}>
          <Center>
            {news.map((article: NewsArticle) => (
              <Post article={article} key={article.title} />
            ))}
          </Center>
        </ScrollView>
      )}
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "96%",
    marginTop: 20,
  },
});

export default Posts;
