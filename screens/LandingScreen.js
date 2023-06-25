import { View, Text, Button } from 'react-native'
import React from 'react'

export default function LandingScreen({startProject}) {
  return (
    <View>
      <Text>Welcome to BeatPad!</Text>
      <Button title="Start a new project" onPress={() => startProject()}/>
    </View>
  )
}