import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import MyStack from '../../App';

export default function Response({route, navigation}) {
    
    const {lat, long } = route.params;
    console.log("lat, long");
    console.log(lat, long);
     
    let message = "";
    useEffect(() => {
        async () => {
            try {
              const response = await fetch(
               `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}&timezone=UTC&date=today`,
              );
              json = await response.json(); 
              message = `The given location Golden Hour is: ${json.results.golden_hour}`; 
              console.log(message);                         
            } catch (error) {
              console.error(error);
            } 
          }
    });
    

  return (
    <View style={styles.responseContainer}>
    <Text style={styles.title}>Golden Hour Calculator</Text>
    <Text>
           ${message}
    </Text>
    {/* <Button
      style={styles.button}
      title="Get Back"
      color='#7988DB'
      onPress={ 
        }/> */}
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

