import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Response({ route }) {
  const [message, setMessage] = useState("");

  const { lat, long } = route.params;

  useEffect(() => {
    (async () => {
      try {
        console.log();
        const response = await fetch(
          `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}&timezone=UTC&date=today`
        );
        const json = await response.json();
        setMessage(
          `The given location Golden Hour is: ${json.results.golden_hour}`
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <View style={styles.responseContainer}>
      <Text style={styles.title}>Golden Hour Calculator</Text>
      <Text style={styles.message}>{message}</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  responseContainer: {
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
  button: {
    backgroundColor: "#FFF",
    height: 50,
    width: 250,
    margin: 12,
    padding: 15,
    borderRadius: 30,
    fontSize: 16,
  },
  message: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    margin: 12,
    marginHorizontal: 20
  }
});
