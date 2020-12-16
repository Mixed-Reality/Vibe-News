import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  const [loadingStr, setLoadingStr] = useState<String>(" . ");

  useEffect(() => {
    // Cleanup
    const loadingEffect = setInterval(() => {
      if (loadingStr.length > 12) setLoadingStr((s) => s.slice(0, 1));
      else setLoadingStr((s) => s + " . ");
    }, 300);

    return () => {
      clearInterval(loadingEffect);
    };
  }, [loadingStr]);

  return (
    <View>
      <Text style={styles.loadStr}> {loadingStr}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadStr: {
    color: "#1ba94c",
    fontSize: 60,
    fontWeight: "bold",
  },
});
export default Loading;
