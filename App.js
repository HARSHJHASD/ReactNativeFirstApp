import { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  Text,
  View,
  Pressable,
  Modal,
} from "react-native";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  const handleTextPress = () => {
    console.log("Text onPress");
  };

  const [isModalVisible, setIsmOdalVisible] = useState(false);

  const handlePressIn = () => {
    console.log("Pressable onPressIn");
  };

  const handlePressOut = () => {
    console.log("Pressable onPressOut");
  };

  const handleLongPress = () => {
    console.log("Pressable onLongPress");
  };

  return (
    <View
      style={{
        backgroundColor: "plum",
        flex: 1,
        padding: 60,
      }}
    >
      <Image source={logoImage} style={{ width: 300, height: 300 }}></Image>
      <Button
        color="midnightblue"
        title="Press"
        onPress={() => {
          console.log("Open Modal pressed");
          setIsmOdalVisible(true);
        }}
      ></Button>
      <ScrollView>
        <Pressable
          onPress={handleTextPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onLongPress={handleLongPress}
        >
          <Text>
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </Pressable>

        <Modal visible={isModalVisible}>
          <View>
            <Text>Hey modal</Text>
            <Button
              onPress={() => {
                console.log("Open Modal closed");
                setIsmOdalVisible(false);
              }}
              title="close"
              color="midnightblue"
            ></Button>
          </View>
        </Modal>
      </ScrollView>
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
      {/* <ImageBackground source={logoImage}>
        <Text>Hello hi i am new here</Text>
      </ImageBackground> */}
    </View>
  );
}
