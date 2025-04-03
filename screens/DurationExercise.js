import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function DurationExercise({ route, navigation }) {
  const { name } = route.params;
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  function startTimer() {
    setRunning(true);
    setSeconds(0);
    let interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setRunning(false);
    }, 30000); // Stops after 30 seconds
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.counter}>Time: {seconds}s</Text>
      <Button title="Start Timer" onPress={startTimer} disabled={running} />
      <Button title="Reset" onPress={() => setSeconds(0)} buttonStyle={styles.button} />
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
