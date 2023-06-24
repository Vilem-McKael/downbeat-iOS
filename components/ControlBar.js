import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ControlButton from './ui/ControlButton'

import Colors from '../constants/colors'

export default function ControlBar({ 
    projectTitle,
    projectBPM,
    handleStartPlayback,
    handleStopPlayback,
    handleSaveProject,
    handleUpdateBPM,
    handleAddTrack
}) {

    

  return (
    <View style={styles.controlsContainer}>
        <View style={styles.leftControlsContainer}>
            <ControlButton title="play" color={Colors.playButton} onPress={handleStartPlayback}/>
            <ControlButton title="stop" color={Colors.stopButton} onPress={handleStopPlayback}/>
            <ControlButton title="save" color={Colors.saveButton} onPress={handleSaveProject}/>
        </View>
        <View style={styles.projectTitleContainer}>
            <Text style={styles.projectTitleText}>{projectTitle}</Text>
        </View>
        <View style={styles.rightControlsContainer}>
            <View style={styles.bpmControlsContainer}>
                <Text style={styles.bpmText}>{projectBPM}</Text>
                <ControlButton title="set BPM" color={Colors.setBPMButton} onPress={handleUpdateBPM}/>
            </View>
            <View style={styles.addTrackContainer}>
                <ControlButton title="new track" color={Colors.newTrackButton} onPress={handleAddTrack}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    controlsContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'red'
    },
    leftControlsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        
    },
    projectTitleContainer: {
        flex: 1,
    },
    rightControlsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    bpmControlsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    addTrackContainer: {
        justifyContent: 'center'
    },
    projectTitleText: {
        fontSize: 30,
        textAlign: 'center'
    },
    bpmText: {
        backgroundColor: 'white',
        width: '50%',
        textAlign: 'center',
        marginTop: 10
    }
})