import { StatusBar } from "expo-status-bar";
import React  from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack"

import Home from "./src/Screens/Home";
import Response from "./src/Screens/Response";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: ''}}
        />
        <Stack.Screen name="Response" component={Response} options={{title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2A766",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFF",
    height: 50,
    width: 250,
    margin: 12,
    padding: 15,
    borderRadius: 30,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FFF",
    height: 50,
    width: 250,
    margin: 12,
    padding: 15,
    borderRadius: 30,
    fontSize: 16,
  },
  description: {
    color: "#fff",
    marginHorizontal: 60,
    marginVertical: 10,
  },
  footer: {
    color: "#fff",
    paddingTop: 50,
  },
});
