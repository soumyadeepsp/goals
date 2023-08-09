import { StyleSheet, Text, View, Button, TextInput, ScrollView, Pressable } from 'react-native';
import React, {useState} from 'react';

export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.goal}</Text>
            <Pressable onPress={() => props.onDelete(props.goal)} android_ripple={{color: 'blue'}}><View style={styles.deleteButtonView}><Text style={styles.deleteButton}>X</Text></View></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalText: {
        color: 'white'
    },
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deleteButton: {
        color: 'white',
    },
    deleteButtonView: {
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 20,
        paddingRight: 20
    }
});
