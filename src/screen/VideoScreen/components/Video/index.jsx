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
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
          source: {
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
        }}
      />

      {/* <Text> kskkskskk</Text> */}
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
