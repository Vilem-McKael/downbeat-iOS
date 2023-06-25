import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function ControlButton({title, onPress, color}) {
  return (
    <View style={[styles.buttonContainer, {backgroundColor: color}]}>
        <Pressable onPress={onPress}>
            <Text>{title}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
})