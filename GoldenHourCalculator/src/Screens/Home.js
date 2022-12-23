import React from 'react';
import { StyleSheet, Text, View, TextInput ,  Button} from 'react-native';


const Home = ({ navigation }) => {
    const [lat, onChangeLat] = React.useState(null);
    const [long, onChangeLong] = React.useState(null);

  return (
    <View style={styles.homeContainer}>
    <Text style={styles.title}>Golden Hour Calculator</Text>
    <Text style={styles.description}>Insert the latitude and longitude of the location that you wish to see the today's Golden Hour:</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeLat}
      value={lat}
      placeholder="Latitude"
      keyboardType="number-pad"
    />
    <TextInput
      style={styles.input}
      onChangeText={onChangeLong}
      value={long}
      placeholder="Longitude"
      keyboardType="number-pad"
    />
    <Button
      style={styles.button}
      title="Get Golden Hour"
      color='#7988DB'
      onPress={() => navigation.navigate('Response', {
        lat: lat, long: long
      })}
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
