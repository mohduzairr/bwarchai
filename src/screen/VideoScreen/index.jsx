import React from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import { Video } from "./components/Video";

// import {  useFonts, Nunito_200ExtraLight_Italic,} from '@expo-google-fonts/nunito';

export const VideoScreen = ({ navigation }) => {
  const signup = () => {
    navigation.navigate("signup");
  };

  const image = {
    uri: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633589090002x146338665670503680%2Fbackground50001.jpg?w=1536&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max",
  };

  return (
    <>
      <ScrollView>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633590093985x133676610762875950%2Fbreelaun_Metal%2520%25283%2529.png?w=384&amp;h=288&amp;auto=compress&amp;fit=crop&amp;dpr=1",
              }}
              style={{
                width: 350,
                height: 140,
                marginLeft: 20,
                marginTop: 90,
                borderWidth: 1,
              }}
            />

            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "rgba(255, 223, 0, 0.6)",
                  fontSize: 40,
                }}
              >
                {" "}
                Welcome Mahad{" "}
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity style={styles.button1}>
                <Text style={{ fontSize: 18, paddingTop: 2 }}>
                  Thurstday,December 16,21
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2}>
                <Text style={{ fontSize: 20 }}>14:47</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.button3}>
              <Text style={{ fontSize: 25, paddingTop: 3, fontWeight: "bold" }}>
                This Week Program
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <View style={styles.button4}>
              <Text style={{ textAlign: "center", fontSize: 18 }}>
                {" "}
                Thursday workout:{"\n"}Obliques, to target that hourglass
                figure.{" "}
              </Text>
            </View>
          </TouchableOpacity>

          <Video />

          <Image
            source={{
              uri: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633592508682x145244526266205220%2Fbreelaun_Neon%2520%25282%2529.png?w=512&amp;h=342&amp;auto=compress&amp;fit=crop&amp;dpr=1",
            }}
            style={{
              width: 350,
              height: 140,
              marginLeft: 20,
              marginTop: 90,
              borderWidth: 1,
            }}
          />

          <View>
            <TouchableOpacity style={styles.button5}>
              <Text style={{ fontSize: 25, paddingTop: 3, fontWeight: "bold" }}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: 340,
              textAlign: "center",
              paddingTop: 20,
              marginTop: 40,
              marginLeft: 20,
              borderBottomWidth: 2,
              borderBottomColor: "rgba(249, 232, 0, 0.5)",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 50,
                color: "rgb(255, 255, 255)",
              }}
            >
              Step 1: Start
            </Text>
          </View>

          <View style={{ width: "100%", height: 700 }}>
            <Text
              style={{
                lineHeight: 35,
                fontSize: 20,
                paddingTop: 10,
                textAlign: "center",
                paddingLeft: 5,
                paddingRight: 3,
                color: "rgb(255, 255, 255)",
              }}
            >
              How are you feeling today? &nbsp; Did you finish the workout?{" "}
              {"\n"}Loosely translated, 'Marchai' means;{"\n"}to move, perform,
              function, to go! {"\n"}All you see here are videos with tips,{" "}
              {"\n"}no frills, no extras, {"\n"}we just are what we are, {"\n"}
              and that's ok, that's just fine!{"\n"}Be who you are, {"\n"}and
              make the best of yourself,{"\n"}you can remind yourself of that,{" "}
              {"\n"}right here...{"\n"}
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  button1: {
    alignItems: "center",
    backgroundColor: "rgba(249, 232, 0, 0.5)",
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: 250,
    // marginLeft:70,
    marginTop: 20,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "rgba(249, 232, 0, 0.5)",
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: 100,
    // marginLeft:70,
    marginTop: 20,
  },
  button3: {
    alignItems: "center",
    backgroundColor: "rgba(249, 232, 0, 0.5)",
    padding: 10,
    borderRadius: 50,
    width: 280,
    height: 60,
    marginLeft: 55,
    marginTop: 40,
  },
  button4: {
    width: 320,
    height: 75,
    backgroundColor: "rgba(255, 223, 0, 0.6)",
    marginLeft: 30,
    // alignItem:'center',
    marginTop: 50,
    borderRadius: 5,
  },
  button5: {
    alignItems: "center",
    backgroundColor: "rgba(249, 232, 0, 0.5)",
    padding: 10,
    borderRadius: 50,
    width: 280,
    height: 60,
    marginLeft: 55,
    marginTop: 40,
    borderWidth: 2,
  },
});
