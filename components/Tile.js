import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Tile({index, value}) {

    let nodeColor = value ? {backgroundColor: 'orange'} : {backgroundColor: 'black'};

  return (
    <View style={styles.tileContainer}>
      <Pressable style={[styles.node, nodeColor]}>

      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    tileContainer: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    node: {
        height: 30,
        width: 30,
        borderRadius: 15
    }
})