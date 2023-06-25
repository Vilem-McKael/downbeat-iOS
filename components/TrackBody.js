import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Audio } from 'expo-av';

import Tile from './Tile'

// const soundObject = new Audio.Sound();

export default function TrackBody({trackIndex, contents, isPlaying, updateTrackContents}) {

    const [playing, setPlaying] = useState(false);
    const [playbackIndex, setPlaybackIndex] = useState(0);


    const [sample, setSample] = useState();

    function updateBinaryTrackInput(tileIndex) {
        const updatedContents = [...contents];
        updatedContents[tileIndex] = (updatedContents[tileIndex] + 1) % 2;
        updateTrackContents(trackIndex, updatedContents);
    }

    // useEffect(() => {
    //     async function loadSample() {
    //         const sound = await soundObject.createAsync(require('../assets/audio/samples/kick1.wav'))
    //         setSample(sound);
    //     }
    //     loadSample();
    // }, [])

    // useEffect(() => {
    //     Audio.setAudioModeAsync({
    //         allowsRecordingIOS: false,
    //         interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //         playsInSilentModeIOS: true,
    //         interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    //         shouldDuckAndroid: true,
    //         staysActiveInBackground: true,
    //         playsThroughEarpieceAndroid: true
    //     })

    //     const
    //     setSample()
    // })

    useEffect(() => {
        let playback = null;
        console.log('here1')
        if (isPlaying) {
            console.log('here2')
            playback = setInterval(() => {
                console.log('here3')
                async function playSample() {
                    try {
                        console.log('here4')
                        setPlaybackIndex((playbackIndex + 1) % 16); // eventually won't be 16, variable length
                        console.log('here5')
                        if (isPlaying && contents[trackIndex]) {
                            console.log('here6')
                            console.log(playbackIndex, isPlaying)
                            const sound = await Audio.Sound.createAsync(require('../assets/audio/samples/kick1.wav'))
                            console.log('here7')
                            setSample(sound)
                            console.log('here8')
                            // await soundObject.loadAsync(require('../assets/audio/samples/kick1.wav'))
                            await sound.playAsync();
                            console.log('here9')
                        } else {
                            console.log('here10')
                        }
                    } catch (error) {
                        console.log('Hit an error:', error)
                    }
                    
                }
                playSample();
                console.log('here11')
            }, Math.floor(30000 / 15));
            console.log('here12')
             // eventually change to bpm variable
        } else {
            console.log('stopped')
            clearInterval(playback);
            setPlaybackIndex(0);
        }

        return () => clearInterval(playback); // called on component unmount
        
    }, [isPlaying, contents, playbackIndex])

    useEffect(() => {
        return sample
        ? () => {
            console.log('Unloading Sound');
            sample.unloadAsync();
        }
        : undefined;
    }, [sample])

    // function handleTrackPlayback

    const testSound = async () => {
        const soundObject = new Audio.Sound();

        console.log('here 2124987123')

        try {
            console.log('here please')
            await soundObject.loadAsync(require('../assets/audio/samples/kick1.wav'))
            await soundObject.playAsync();
            console.log('should be playing')
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    }

  return (
    <View>
        <Pressable style={{backgroundColor: 'red', height: 40, width: 40}} onPress={testSound}></Pressable>
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
        keyExtractor={(item, index) => index.toString()}
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