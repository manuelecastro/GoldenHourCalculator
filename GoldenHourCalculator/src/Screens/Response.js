import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import MyStack from '../../App';

export default function Response() {
    console.log("lat, long");
    console.log(MyStack.lat, MyStack.long);

  return (
    <View style={styles.responseContainer}>
    <Text style={styles.title}>Golden Hour Calculator</Text>
    <Button
      style={styles.button}
      title="Get Back"
      color='#7988DB'
      onPress={ async () => {
             try {
               const response = await fetch(
                `https://api.sunrisesunset.io/json?lat=${MyStack.lat}&lng=${MyStack.long}&timezone=UTC&date=today`,
               );
               const json = await response.json();
                            
               return Alert.alert(`worked! ${json.results.golden_hour}`);
             } catch (error) {
               console.error(error);
             } 
           }
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
    responseContainer: {
        flex: 1,
        backgroundColor: '#F2A766',
        alignItems: 'center',
        justifyContent: 'center',
      },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
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
});

