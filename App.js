import { Text, View,Image, ImageBackground } from "react-native";
const logoImage = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <View
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
    ></View> */}
      {/* <Text style={{ color:'#ffff' }}>Hello World</Text> */}
      {/* <Image source={logoImage} style={{width:300,height:300}}/>
      <Image source={{uri:"https://picsum.photos/id/237/200/300"}} style={{width:300,height:300}}/> */}
      <ImageBackground source={logoImage}>
        <Text>Hello hi i am new here</Text>
      </ImageBackground>
    </View>
  );
}
