import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootParamsProps } from "../RootParamList";
import Center from "./Center";
import { NEWS_API } from "../API";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";

const URL = `http://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}`;

const Posts: React.FC<RootParamsProps<"Posts">> = ({ route, navigation }) => {
  const { newsType } = route.params;
  const [news, setNews] = useState([]);
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
        news.map((e: any) => <Text> ${e.title}</Text>)
      )}
    </Center>
  );
};

const styles = StyleSheet.create({});

export default Posts;
