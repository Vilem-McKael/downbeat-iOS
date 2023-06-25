import { View, StyleSheet, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import ControlBar from '../components/ControlBar'
import Track from '../components/Track'

export default function ProjectScreen() {

    const [trackData, setTrackData] = useState([])
    const [projectTitle, setProjectTitle] = useState('Project 1')
    const [projectBPM, setProjectBPM] = useState(120)

    const [isPlaying, setIsPlaying] = useState(false)

    // PROJECT HANDLERS

    function handleSaveProject() {
        return
    }

    function handleUpdateBPM() {
        return
    }

    // PLAYBACK HANDLERS

    function handleStartPlayback() {
        setIsPlaying(true)
    }

    function handleStopPlayback() {
        setIsPlaying(false)
    }

    // TRACK HANDLERS

    function handleAddTrack() {
        setTrackData((oldTrackData) => [
            ...oldTrackData,
            {
                index: oldTrackData.length, // starts at 0
                sample: 'kick1', // starter sample
                volume: 50, // half volume to begin, halfway on knob
                contents: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 16 long by default (for now)
            }
        ])
    }

    function handleDeleteTrack(trackID) {
        setTrackData((oldTrackData) => oldTrackData.filter((track) => track.id !== trackID))
    }

    function updateTrackContents(trackIndex, contents) {
        const trackDataCopy = JSON.parse(JSON.stringify(trackData));
        trackDataCopy[trackIndex].contents = contents;
        setTrackData(trackDataCopy);

    }

  return (
    <View style={styles.projectContainer}>
        <View style={styles.controlBarContainer}>
            <ControlBar
                projectTitle={projectTitle}
                projectBPM={projectBPM}
                handleStartPlayback={handleStartPlayback}
                handleStopPlayback={handleStopPlayback}
                handleSaveProject={handleSaveProject}
                handleUpdateBPM={handleUpdateBPM}
                handleAddTrack={handleAddTrack}
                />
        </View>
        <View style={styles.trackListContainer}>
            <FlatList 
            data={trackData}
            renderItem={(itemData) => {
                return <Track
                        index={itemData.item.index}
                        sample={itemData.item.sample}
                        volume={itemData.item.volume}
                        contents={itemData.item.contents}
                        isPlaying={isPlaying}
                        updateTrackContents={updateTrackContents}
                        />
            }}
            alwaysBounceVertical='false'
            keyExtractor={(item, index) => index.toString}
            style={styles.trackList}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    projectContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    controlBarContainer: {
        height: '20%',
        width: '90%'
    },
    trackListContainer: {
        flex: 1,
        height: '70%',
        width: '90%',
        backgroundColor: '#f2e2d5'
    },
    trackList: {
        flex: 1
    }
})