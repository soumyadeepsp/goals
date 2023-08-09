import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import React, {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisble, setModalIsVisible] = useState(false);
  function addGoalHandler(goal) {
    setGoalsList((goalsList) => [...goalsList, goal]);
    cancelAddGoal();
  }
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function cancelAddGoal() {
    setModalIsVisible(false);
  }
  function deleteGoal(goal) {
    setGoalsList((goalsList) => {
      return goalsList.filter((g) => g!==goal)
    });
}
  return (
    <View style={styles.appContainer}>
      <Button title='Add Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
      {modalIsVisble && <GoalInput 
          onAddGoal={addGoalHandler}
          visible={modalIsVisble}
          onCancel={cancelAddGoal}
      />}
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goalsList.map((goal) => 
            <GoalItem goal={goal} onDelete={deleteGoal}/>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  }
});
