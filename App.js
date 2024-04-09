import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "green", flex: 1 }}>
    <View
       style={{
         backgroundColor: "plum",
         width: 200,
         height: 200,
         justifyContent: "center",
         alignItems: "center",
       }}
    ></View>
       <View
       style={{
         backgroundColor: "#c8c8c8",
         width: 200,
         height: 200,
         justifyContent: "center",
         alignItems: "center",
       }}
    ></View>
   </View>
   
  );
}
