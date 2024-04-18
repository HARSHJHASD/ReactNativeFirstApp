import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Greet from "./components/Greet";
import Box from "./components/Box";
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

  const statusBarChange = () => {
    setShowDStatus(true);
  };

  const [showStatus, setShowStatus] = useState(true);

  const toggleStatusBar = () => {
    setShowStatus(!showStatus);
  };

  return (
    // <View
    //   style={{
    //     backgroundColor: "plum",
    //     flex: 1,
    //     padding: 60,
    //   }}
    // >
    //   <StatusBar
    //     hidden={!showStatus}
    //     barStyle="light-content"
    //     backgroundColor="lightgreen"
    //   ></StatusBar>
    //   <Image source={logoImage} style={{ width: 300, height: 300 }}></Image>
    //   <Button
    //     color="midnightblue"
    //     title="Press For Modal"
    //     onPress={() => {
    //       console.log("Open Modal pressed");
    //       setIsmOdalVisible(true);
    //     }}
    //   ></Button>
    //   <Button
    //     title={showStatus ? "Hide Status Bar" : "Show Status Bar"}
    //     onPress={toggleStatusBar}
    //   />
    //   <Button
    //     title="Invoke Alert"
    //     onPress={() => {
    //       Alert.alert("This is triggered heading", "this is message", [
    //         {
    //           text: "Cancel",
    //           onPress: () => console.log("Cancelled"),
    //         },
    //         {
    //           text: "Cancel",
    //           onPress: () => console.log("Cancelled"),
    //         },
    //         {
    //           text: "Cancel",
    //           onPress: () => console.log("Cancelled"),
    //         },
    //         {
    //           text: "Cancel",
    //           onPress: () => console.log("Cancelled"),
    //         },
    //       ]);
    //     }}
    //   />

    //   <Greet name="Harsh" />

    //   {/* <ActivityIndicator size="large" color="midnightblue" /> */}
    //   <ScrollView>
    //     <Pressable
    //       onPress={handleTextPress}
    //       onPressIn={handlePressIn}
    //       onPressOut={handlePressOut}
    //       onLongPress={handleLongPress}
    //     >
    //       <Text>
    //         ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    //         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    //         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    //         ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    //         officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
    //         amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
    //         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    //         nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    //         consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    //         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    //         cupidatat non proident, sunt in culpa qui officia deserunt mollit
    //         anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    //         adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
    //         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    //         exercitation ullamco laboris nisi ut aliquip ex ea commodo
    //         consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    //         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    //         cupidatat non proident, sunt in culpa qui officia deserunt mollit
    //         anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    //         adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
    //         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    //         exercitation ullamco laboris nisi ut aliquip ex ea commodo
    //         consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    //         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    //         cupidatat non proident, sunt in culpa qui officia deserunt mollit
    //         anim id est laborum.
    //       </Text>
    //     </Pressable>
    //   </ScrollView>
    //   <Modal
    //     presentationStyle="pageSheet"
    //     animationType="slide"
    //     visible={isModalVisible}
    //   >
    //     <View>
    //       <Text>Hey modal</Text>
    //       <Button
    //         onPress={() => {
    //           console.log("Open Modal closed");
    //           setIsmOdalVisible(false);
    //         }}
    //         title="close"
    //         color="midnightblue"
    //       ></Button>
    //     </View>
    //   </Modal>
    //   {/* <View
    //    style={{
    //      backgroundColor: "plum",
    //      width: 200,
    //      height: 200,
    //      justifyContent: "center",
    //      alignItems: "center",
    //    }}
    // ></View>
    //    <View
    //    style={{
    //      backgroundColor: "#c8c8c8",
    //      width: 200,
    //      height: 200,
    //      justifyContent: "center",
    //      alignItems: "center",
    //    }}
    // ></View> */}
    //   {/* <Text style={{ color:'#ffff' }}>Hello World</Text> */}
    //   {/* <Image source={logoImage} style={{width:300,height:300}}/>
    //   <Image source={{uri:"https://picsum.photos/id/237/200/300"}} style={{width:300,height:300}}/> */}
    //   {/* <ImageBackground source={logoImage}>
    //     <Text>Hello hi i am new here</Text>
    //   </ImageBackground> */}
    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#ff5733", height: 50, width: 50 }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "#1e90ff", height: 50, width: 50 }}>
        Box 3
      </Box>
      <Box style={{ backgroundColor: "#ffcc00", height: 50, width: 50 }}>
        Box 4
      </Box>
      <Box style={{ backgroundColor: "#7cfc00", height: 50, width: 50 }}>
        Box 5
      </Box>
      <Box style={{ backgroundColor: "#ff5733", height: 50, width: 50 }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "#1e90ff", height: 50, width: 50 }}>
        Box 3
      </Box>
      <Box style={{ backgroundColor: "#ffcc00", height: 50, width: 50 }}>
        Box 4
      </Box>
      <Box style={{ backgroundColor: "#7cfc00", height: 50, width: 50 }}>
        Box 5
      </Box>
      <Box style={{ backgroundColor: "#ff5733", height: 50, width: 50 }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "#1e90ff", height: 50, width: 50 }}>
        Box 3
      </Box>
      <Box style={{ backgroundColor: "#ffcc00", height: 50, width: 50 }}>
        Box 4
      </Box>
      <Box
        style={{
          backgroundColor: "#7cfc00",
          height: 50,
          width: 50,
          flexBasis: 60,
        }}
      >
        Box 5
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 6,
    borderColor: "red",
    height: 200,
    // flex: 1,
    // flexDirection: "column-reverse",
    // justifyContent: "space-around",
    flexWrap: "wrap",
    columnGap: 10,
    // flex: 1,
    // alignContent: "space-around",
  },
});
