import { View, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();

export default function PlaybackTest() {

    // const sound = useRef(new Audio.Sound());

    // useEffect(() => {
    //     return sound ? () => sound.current.unloadAsync() : undefined;
    // }, [sound])

    // const playSound = async () => {
    //     console.log("Loading Sound");

    //     const { sound: playbackObject } = await sound.current.createAsync(require("../assets/audio/samples/kick1.wav"));
    //     sound.current = playbackObject;

    //     console.log("playing sound")

    //     const checkLoaded = await sound.current.getStatusAsync();
    //     if (checkLoaded.isLoaded) {
    //         console.log("Error in Loading mp3")
    //     } else {
    //         await sound.current.playAsync();
    //     }
    // }

    // // useEffect(() => {
    // //     return sound
    // //     ? () => {
    // //         console.log('Unloading Sound');
    // //         sound.unloadAsync();
    // //     }
    // //     : undefined;
    // // }, [sound])


    // ------------------------------

    const [playing, setPlaying] = useState(false);
    
    const playAudio = async (sound) => {
        try {
            if (playing) {
                await soundObject.pauseAsync();
                setPlaying(false);
            } else {
                setPlaying(true);
                await soundObject.loadAsync(require('../assets/audio/samples/kick1.wav'))
                await soundObject.playAsync();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const testSound = async () => {
        const soundObject = new Audio.Sound();

        console.log('here 2124987123')

        try {
            console.log('here please')
            await soundObject.loadAsync(require('../assets/audio/samples/kick1.wav'));
            await soundObject.playAsync();
            console.log('should be playing')
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    }

  return (
    <View>
      <Button title="play sound" style={{backgroundColor: 'red'}} onPress={testSound}/>
    </View>
  )
}