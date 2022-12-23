import React from 'react';
import { StyleSheet, Text, View, TextInput , Alert, Button} from 'react-native';
import MyStack from '../../App';

//import api from './src/Services/Api';

const Home = ({ navigation }, props) => {
    console.log("lat, long");
    console.log( navigation.number);

  return (
    <View style={styles.homeContainer}>
    <Text style={styles.title}>Golden Hour Calculator</Text>
    <Text style={styles.description}>Insert the latitude and longitude of the location that you wish to see the today's Golden Hour:</Text>
    <TextInput
      style={styles.input}
      value={MyStack.lat}
      placeholder="Latitude"
      keyboardType="number-pad"
    />
    <TextInput
      style={styles.input}
      onChangeText={MyStack.onChangeLong}
      value={MyStack.long}
      placeholder="Longitude"
      keyboardType="number-pad"
    />
    <Button
      style={styles.button}
      title="Get Golden Hour"
      color='#7988DB'
      onPress={() => navigation.navigate('Response')}
    />
    </View>
  );
}

const styles = StyleSheet.create({
    homeContainer: {
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
  input: {
    backgroundColor: "#FFF",
    height: 50,
    width: 250,
    margin: 12,
    padding: 15,
    borderRadius: 30,
    fontSize: 16,
    marginBottom: 15
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
});

export default Home;

// async () => {
//     try {
//       const response = await fetch(
//         `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}&timezone=UTC&date=today`,
//       );
//       const json = await response.json();
                    
//       return console.log(json.results);
//     } catch (error) {
//       console.error(error);
//     } 
//   }