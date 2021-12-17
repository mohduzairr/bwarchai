import React from "react";
import { View, StyleSheet } from "react-native";
import VideoPlayer from "expo-video-player";

export const Video = () => {
  return (
    <View style={styles.container}>
      <VideoPlayer
        style={{ height: 300, width: 320 }}
        videoProps={{
          shouldPlay: true,
          // resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: "https://static.videezy.com/system/resources/previews/000/008/445/original/Dark_Haired_Girl_in_disbelief_1.mp4",
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350,
    marginLeft: 30,
    marginRight: 10,
    marginTop: 20,
  },
});















// import React from "react";
// import { View, StyleSheet,FlatList  } from "react-native";
// import VideoPlayer from "expo-video-player";
// import { useState } from "react";

// export const Video = () => {

//   const [video, setVideo] = useState([
//     {
//       ID: 1,
//       video:
//         "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     },
//     {
//       ID: 2,
//       video:
//         "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     },
//     {
//       ID: 3,
//       video:
//         "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     },
//   ]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         keyExtractor={(item) => item.ID}
//         data={video}
//         renderItem={({ item }) => (
//           <VideoPlayer
//           style={{ height: 300, width: 320 }}
//           videoProps={{
//             shouldPlay: true,
//             resizeMode: Video.RESIZE_MODE_CONTAIN,
//             source: {uri:item.video}
//           }}
//         />

//         )}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 350,
//     width: 350,
//     marginLeft: 30,
//     marginRight: 10,
//     marginTop: 20,
//   },
// });
