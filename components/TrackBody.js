import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Audio } from 'expo-av';

import Tile from './Tile'

// const soundObject = new Audio.Sound();

export default function TrackBody({trackIndex, contents, isPlaying, updateTrackContents}) {

    const [playing, setPlaying] = useState(false);


    const [sample, setSample] = useState();

    function updateBinaryTrackInput(tileIndex) {
        const updatedContents = [...contents];
        updatedContents[tileIndex] = (updatedContents[tileIndex] + 1) % 2;
        updateTrackContents(trackIndex, updatedContents);
    }

    const testSound = async () => {
        const soundObject = new Audio.Sound();

        try {
            await soundObject.loadAsync(require('../assets/audio/samples/kick1.wav'));
            await soundObject.playAsync();
            console.log('should be playing')
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    }

  return (
    <View>
        <Pressable style={{backgroundColor: 'red', height: 40, width: 40}} onPress={async () => await testSound()}></Pressable>
      <FlatList
        data={contents}
        renderItem={(tileData) => {
            return <Tile 
                    index={tileData.index}
                    value={tileData.item}
                    trackIndex={trackIndex}
                    updateBinaryTrackInput={updateBinaryTrackInput}
                    />
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