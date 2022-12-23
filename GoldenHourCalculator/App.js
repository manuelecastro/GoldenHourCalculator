import { StatusBar } from "expo-status-bar";
import React  from "react";
import { StyleSheet, Text, View, TextInput, Alert, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack"

import Home from "./src/Screens/Home";
import Response from "./src/Screens/Response";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const [lat, onChangeLat] = React.useState(null);
  const [long, onChangeLong] = React.useState(null);
  
  console.log("lat, long");
  console.log(lat, long);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: ''}}
          number= "1"
        />
        <Stack.Screen name="Response" component={Response} options={{title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

// export default function App() {
//   // const [lat, onChangeLat] = React.useState(null);
//   // const [long, onChangeLong] = React.useState(null);

//   var isResponse = false;
//   if (!isResponse) {
//     return (
//       <View style={styles.container}>
//         <Home />
//         <Response />
//       </View>
//     );
//   } else {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Golden Hour Calculator</Text>
//         <Text>
//           `The given location Golden Hour is: ${json.results.golden_hour}`
//         </Text>
//       </View>
//     );
//   }
// }

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
