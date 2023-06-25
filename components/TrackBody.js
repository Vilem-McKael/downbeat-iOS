import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { Audio } from 'expo-av';

import Tile from './Tile'

const soundObject = new Audio.Sound();

export default function TrackBody({trackIndex, contents, isPlaying, updateTrackContents}) {

    const [playing, setPlaying] = useState(false);

    const [sample, setSample] = useState();


    const soundRef = useRef(null);

    useEffect(() => {
        // const soundObject = new Audio.Sound();
        
        const loadSounds = async () => {
            try {
                const { sound } = await Audio.Sound.createAsync(require("../assets/audio/samples/kick1.wav"))
                console.log('Sound Loaded Successfully')
                console.log(sound)
                soundRef.current = sound;
                console.log("Playback status1:", await soundRef.current.getStatusAsync());
            } catch (error) {
                console.log("Error loading sound:", error);
            }
            
        }
        loadSounds();

        return () => {
            soundObject && soundObject.unloadAsync();
        };
    }, []);

    const testSound = async () => {

        try {
            
            console.log('here1')
            if (soundRef.current) {
                const status = await soundRef.current.getStatusAsync();
                console.log("Playback status:", status);
                console.log('here2')
                await soundRef.current.playAsync();
                console.log('here3')
            } else {
                console.log("Sound reference is null: ", soundRef)
            }
        } catch (error) {
            console.log(error)
        }
    }


    

    function updateBinaryTrackInput(tileIndex) {
        const updatedContents = [...contents];
        updatedContents[tileIndex] = (updatedContents[tileIndex] + 1) % 2;
        updateTrackContents(trackIndex, updatedContents);
    }

    // const testSound = async () => {
    //     const status = await soundObject.loadAsync(require('../assets/audio/samples/kick1.wav'), {shouldPlay: true})
    //     .then((res) => console.log(status));

    //     try {
    //         await soundObject.playAsync();
    //         console.log('should be playing')
    //     } catch (error) {
    //         console.log('Error playing sound:', error);
    //     }
    // }

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