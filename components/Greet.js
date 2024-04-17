import { StyleSheet, Text, View } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={[styles.container]}>
      <Text>Hello, {name}</Text>
      <View style={[styles.container, styles.container1, styles.boxShadow]}>
        <Text>Hey boy</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
  container1: {
    backgroundColor: "red",
    width: "25%",
    marginVertical: 10,
    marginLeft: 10,
    borderWidth: 2,
    borderBlockColor: "black",
    borderRadius: 5,
  },
  //this gets applied to apple but not to android......
  boxShadow: {
    shadowColor: "green",
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 10,
    elevation: 8,
  },
});
