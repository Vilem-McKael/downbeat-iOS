import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TrackHeader from './TrackHeader'
import TrackBody from './TrackBody'

export default function Track({trackID, sample, volume, contents}) {

  console.log(contents)

  return (
    <View style={styles.trackContainer}>
        <View>
          <TrackHeader sample={sample} volume={volume}/>
        </View>
        <View>
          <TrackBody contents={contents}/>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  trackContainer: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    height: 50,
  },
  // trackHeaderContainer: {
  //   flexDirection: 'row'
  // },
  // trackBodyContainer: {
  //   flexDirection: 'row'
  // }
})