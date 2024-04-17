import { StyleSheet, Text, View } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={styles.container}>
      <Text>Hello, {name}</Text>
      <View style={[styles.container, styles.container1]}>
        <Text>Hey boy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
  container1: {
    backgroundColor: "red",
  },
});
