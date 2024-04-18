import { StyleSheet, Text, View } from "react-native";

function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default Box;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ffff",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
