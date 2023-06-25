import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TrackHeader({sample, volume}) {
  return (
    <View style={styles.trackHeaderContainer}>
      <Text>{sample}</Text>
      <Text>{volume}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    trackHeaderContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'brown',
    } 
})