import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const exercises = [
  { id: '1', name: 'Push-Ups', type: 'Repetition' },
  { id: '2', name: 'Jump Rope', type: 'Duration' },
  { id: '3', name: 'Squats', type: 'Repetition' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate(
                item.type === 'Repetition' ? 'RepetitionExercise' : 'DurationExercise',
                { exerciseName: item.name }
              )
            }
            containerStyle={styles.buttonContainer}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
