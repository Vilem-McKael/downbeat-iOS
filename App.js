import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LandingScreen from './screens/LandingScreen';
import ProjectScreen from './screens/ProjectScreen';

export default function App() {

  const [screen, setScreen] = useState(<LandingScreen startProject={handleStartProject}/>)

  function handleStartProject() {
    setScreen(<ProjectScreen />)
  }

  return (
    <View style={styles.container}>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
