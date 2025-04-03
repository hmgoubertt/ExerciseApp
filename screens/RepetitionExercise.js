import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function RepetitionExercise({ route, navigation }) {
  const { name } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.counter}>Reps: {count}</Text>
      <Button title="Increase Reps" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} buttonStyle={styles.button} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} buttonStyle={styles.button} />
  </View>
);
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  counter: { fontSize: 20, marginVertical: 10 },
  button: { marginTop: 10 },
});

