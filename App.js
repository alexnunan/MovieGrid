import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './Components/Game';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Movie Grid</Text>
      <Game/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    marginTop: 60,
    fontWeight: 'bold',
    fontSize: 40,
  }
});
