import React from "react";
import Home from "./Home";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Posts from "./Posts";
import { RootStackParamList } from "../RootParamList";
import { PrimaryColor } from "../Colors";
import { color } from "react-native-reanimated";

interface RoutesProps {}

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: PrimaryColor,
          },
          headerTitleStyle: {
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
            fontFamily: "Roboto",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Vibe News | Home ",
          }}
        />
        <Stack.Screen
          name="Posts"
          component={Posts}
          options={({ route }) => ({ title: route.params.header })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
