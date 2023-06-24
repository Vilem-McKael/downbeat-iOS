import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import Tile from './Tile'

export default function TrackBody({contents}) {
  return (
    <View>
      <FlatList
        data={contents}
        renderItem={(tileData) => {
            return <Tile index={tileData.index} value={tileData.item}/>
        } }
        alwaysBounceHorizontal="false"
        keyExtractor={(item, index) => index}
        style={styles.tileList}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    tileList: {
        flexDirection: 'row'
    }
})