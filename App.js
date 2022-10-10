import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from './src/navigation/Navigation';

export default function App() {
  return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    // <View>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}
