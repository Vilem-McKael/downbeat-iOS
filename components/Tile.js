import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function Tile({index, value, trackIndex, updateBinaryTrackInput}) {

    // const [tileVal, setTileVal] = useState(value)

    let nodeColor = value ? {backgroundColor: 'orange'} : {backgroundColor: 'black'};

    function handlePress() {
        updateBinaryTrackInput(index);
        // setTileVal((oldTileVal) => (oldTileVal + 1) % 2);
    }

  return (
    <View style={styles.tileContainer}>
      <Pressable style={[styles.node, nodeColor]} onPress={handlePress}>

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