import React, { useState } from 'react'
import { View,Text, StyleSheet,TextInput,TouchableOpacity   } from 'react-native'

export const SignUpScreen = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const submit = ()=>{
      
    //   console.log("clicked me")
    //   // ToastAndroid.show("successful register",TestAndriod.SHORT)

    //   const data ={name:name,email:email,phone:phone,password:password}
    //   console.log(data)
    //   signup(data)
     
    // }

    async function submit(){
      const data ={name:name,email:email,phone:phone,password:password}
     console.log(data)
    //  const register = await axios.post("http://192.168.48.6:8000/signup",data)
    // const register = await axios.post(" http://127.0.0.1:8000/signup",data)
    //  console.log("1234.."+register);
     setEmail('');
     setPassword('');
     setName('');
     alert("registered succesfully")

    //  navigation.navigate('login')

    }




    return (
      <View style={styles.container}>
        <View style={{ marginTop: 60 }}>
          <Text style={{ textAlign: "center", fontSize: 40 }}>Sign Up</Text>
        </View>
        <View style={{marginTop:30}}> 
          <View style={styles.textinput}>
            <TextInput
              placeholder="user name"
              value={name}
              keyboardType="default"
              onChangeText={(text) => setName(text)}
            />
          </View>
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
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>   

        <TouchableOpacity style={styles.button} onPress={submit}>
            <Text style={{fontSize:20 }} >Sign Up</Text>            
        </TouchableOpacity>
           
           <Text style={{textAlign:'center',fontSize:40,marginTop:30}}>OR</Text>
           
        <TouchableOpacity style={styles.button1} onPress={submit}>
            <Text style={{fontSize:20 }} >Already a user?Log in</Text>            
        </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(247, 189, 0)",
    },
    textinput:{
        height: 50,
        width:300,
        margin: 12,
        padding: 10,
        borderWidth:0,  
        backgroundColor:'white',
        marginLeft:40,
        borderRadius:10
        },
        
        // heading:{
        //   fontSize:30,
        // },
       
        button: {
          alignItems: "center",
          backgroundColor: "rgb(35, 87, 137)",
          padding: 10,
          borderRadius:50,
          height: 50,
          width:300,
          marginLeft:40,
          marginTop:20,

        },

        button1: {
            alignItems: "center",
            backgroundColor: "rgba(249, 232, 0, 0.5)",
            padding: 10,
            borderRadius:50,
            height: 50,
            width:300,
            marginLeft:40,
            marginTop:20,
  
          }
   
  });
  