import { StyleSheet, Text, View, Button, TextInput, Modal } from 'react-native';
import React, {useState} from 'react';

export default function GoalInput(props) {
    const [goal, setGoal] = useState('');
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={newGoal => {setGoal(newGoal);}}
                    placeholder='Your course goal'/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => props.onAddGoal(goal)} title='Add goal'/>
                    <Button title='Cancel' onPress={props.onCancel}/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: '100%',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 8,
        padding: 8
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
      }
});
