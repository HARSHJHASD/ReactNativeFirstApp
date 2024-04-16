import { StyleSheet, Text, View } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={styles.container}>
      <Text>Hello, {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
});
