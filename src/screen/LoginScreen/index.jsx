import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { BackButton } from "../../common/components/BackButton";
import axios from "axios";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function login() {
    const data = { email: email, password: password };
    console.log(data);
    //  const response = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:iS-Jr0bc/auth/login",data)
    //    if (response.data == false) {
    //     setMessage(response.error);
    // //   setLoading(false);
    //      alert("wrong email or password");
    //    } else {
    //      setEmail("");
    //      setPassword("");
    //      navigation.navigate('profile')

    //  }
    navigation.navigate("videoscreen");
  }
  const pushsignup = () => {
    navigation.navigate("signup");
  };

  return (
    <View style={styles.container}>
      <ScrollView >

      <TouchableOpacity  style={styles.bckbtn} onPress={() => navigation.goBack()} >
     <BackButton/>
     </TouchableOpacity>

     
        <View style={{ marginTop: 60 }}>
          <Text style={{ textAlign: "center", fontSize: 40 }}>Log In</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={styles.textinput}>
            <TextInput
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.textinput}>
            <TextInput
              placeholder="Password"
              value={password}
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={{ fontSize: 20,color:'white' }}>Log In</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", fontSize: 40, marginTop: 30 }}>
          OR
        </Text>

        <TouchableOpacity style={styles.button1} onPress={pushsignup}>
          <Text style={{ fontSize: 20 }}>Not a User Yet? Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={{ fontSize: 20 }}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={{ fontSize: 20 }}>Terms and conditions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(247, 189, 0)",
  },
  textinput: {
    height: 50,
    width: 300,
    margin: 12,
    padding: 10,
    borderWidth: 0,
    backgroundColor: "white",
    marginLeft: 40,
    borderRadius: 10,
  },

  // heading:{
  //   fontSize:30,
  // },

  button: {
    alignItems: "center",
    backgroundColor: "rgb(35, 87, 137)",
    padding: 10,
    borderRadius: 50,
    height: 50,
    width: 300,
    marginLeft: 40,
    marginTop: 20,
  },

  button1: {
    alignItems: "center",
    backgroundColor: "rgba(249, 232, 0, 0.5)",
    padding: 10,
    borderRadius: 50,
    height: 50,
    width: 300,
    marginLeft: 40,
    marginTop: 20,
  },

  button2: {
    alignItems: "center",
    backgroundColor: "rgba(249, 232, 0, 0.5)",
    padding: 10,
    borderRadius: 50,
    height: 50,
    width: 250,
    marginLeft: 70,
    marginTop: 20,
  },
 
});
