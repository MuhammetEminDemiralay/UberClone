import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchResult from './src/screens/SearchResult';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchResult />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex : 1
  },
});
