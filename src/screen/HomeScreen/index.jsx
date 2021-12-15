import React from 'react'
import { ImageBackground, Text,View,Image,StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import {  useFonts, Raleway_200ExtraLight} from '@expo-google-fonts/raleway';
import AppLoading from 'expo-app-loading';

// import {  useFonts, Nunito_200ExtraLight_Italic,} from '@expo-google-fonts/nunito';



 export const HomeScreen = ({ navigation }) => {


    const signup = ()=>{
      navigation.navigate('signup')
    }
   
    const image ={ uri: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633589090002x146338665670503680%2Fbackground50001.jpg?w=1536&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max" };

     return (

        <>
        <ScrollView>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>

            <Image source={{uri: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633590093985x133676610762875950%2Fbreelaun_Metal%2520%25283%2529.png?w=384&amp;h=288&amp;auto=compress&amp;fit=crop&amp;dpr=1'}}
       style={{width: 350, height: 140,marginLeft:20,marginTop:90,borderWidth:1}} /> 
            
         <Image source={{uri: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633590332624x150773598429397860%2Fbreelaun_Metal%2520%25282%2529%2520%25281%2529.png?w=768&amp;h=535&amp;auto=compress&amp;fit=crop&amp;dpr=1'}}
       style={{width: 400, height: 300}} /> 
        </View>
        <TouchableOpacity onPress={signup}>
        <View style={{height:45,width:130,backgroundColor:'rgba(255, 223, 0, 0.6)',textAlign:'center',paddingLeft:30,paddingTop:6,marginLeft:140,marginTop:20,borderRadius:10,borderWidth:1}}>
            <Text style={{fontSize:20}} >Sign Up</Text>
         </View>
         </TouchableOpacity>

         <TouchableOpacity>
        <View style={{height:45,width:130,backgroundColor:'rgba(255, 223, 0, 0.6)',textAlign:'center',paddingLeft:35,paddingTop:6,marginLeft:140,marginTop:20,borderRadius:10,borderWidth:1}}>
            <Text style={{fontSize:20}} >Log In</Text>
         </View>
         </TouchableOpacity>
          {/* <Features/> */}
         <View style= {{width:'100%',height:700,backgroundColor:'rgba(128, 128, 128, 0.8)',marginTop:60}}>
           <Text style={{textAlign:'center',fontSize:40,marginTop:20,fontWeight: 'bold',borderBottomWidth: 5,width:300,marginLeft:42,borderBottomColor: "rgba(255, 223, 0, 0.6)"}}>FEATURES</Text>
           < Text style={{marginTop:20,lineHeight:35,fontSize:20,paddingTop:10,textAlign: 'center', fontFamily:'Raleway_200ExtraLight',paddingLeft:5,paddingRight:3,}} >
           Bmarchai Studios gives you the chance to be have free access to the same fitness secrets taught to some real models in L.A., and many of the workouts  have things you've never seen before. Way more that just squats and push-ups, are {'\n'} workouts include; 
           {'\n'}  lifting the breast area, inner thigh gap, toning the bra strap area, 
             lower pouch area (no not just knee tucks).{'\n'} and more. 
           </Text>
           <Text style={{lineHeight:35,fontSize:20,paddingTop:10,textAlign: 'center'}} > There's a free workout everyday, with no extra subscription needed,{'\n'}we don't even have a premium area because it's all premium.</Text>
         </View>
          {/* <WorkOut/> */}
        <View>
        <Text style={{textAlign:'center',fontSize:45,color:'rgba(255, 223, 0, 0.6)'}} >WorkOuts of this week!</Text>
        <View style={{width:300,height:52,backgroundColor:'rgba(255, 223, 0, 0.6)',marginLeft:40,alignItem:'center',marginTop:30,borderRadius:5}} >
          <Text style ={{textAlign:'center',fontSize:18}}>Sunday workout:{'\n'}lifting and firming the breasts.</Text>
        </View>

        <View style={{width:300,height:74,backgroundColor:'rgba(255, 223, 0, 0.6)',marginLeft:40,alignItem:'center',marginTop:35,borderRadius:5}} >
          <Text style ={{textAlign:'center',fontSize:18}}>Monday workout:{'\n'} Lower Back And Lower Abs.You can use a pulley or band.</Text>
        </View>

        <View style={{width:300,height:54,backgroundColor:'rgba(255, 223, 0, 0.6)',marginLeft:40,alignItem:'center',marginTop:30,borderRadius:5}} >
          <Text style ={{textAlign:'center',fontSize:18}}>Tuesday workout:{'\n'}Shoulder Toning and Posture.</Text>
        </View>

        <View style={{width:300,height:75,backgroundColor:'rgba(255, 223, 0, 0.6)',marginLeft:40,alignItem:'center',marginTop:30,borderRadius:5}} >
          <Text style ={{textAlign:'center',fontSize:18}}>Wednesday workout:{'\n'}Inner thigh gap, these are hard but very effective.</Text>
        </View>
       
        <View style={{width:300,height:75,backgroundColor:'rgba(255, 223, 0, 0.6)',marginLeft:40,alignItem:'center',marginTop:30,borderRadius:5}} >
          <Text style ={{textAlign:'center',fontSize:18}}>Thursday workout:{'\n'}Obliques, to target that hourglass figure.</Text>
        </View>
      
        <View style={{width:300,height:80,backgroundColor:'rgba(255, 223, 0, 0.6)',marginLeft:40,alignItem:'center',marginTop:30,borderRadius:5}} >
          <Text style ={{textAlign:'center',fontSize:18}}>Friday workout:{'\n'}O Wow, all about the triceps, a bit different though.</Text>
        </View>


        <View style={{width:300,height:80,backgroundColor:'rgba(255, 223, 0, 0.6)',marginLeft:40,alignItem:'center',marginTop:30,borderRadius:5}} >
          <Text style ={{textAlign:'center',fontSize:18}}>Saturday workout:{'\n'} Ok time for glutes with a little twist.</Text>
        </View>

       </View>  
       
       <View style={{height:100,width:'100%'}}>

       </View>

        </ImageBackground>
        </ScrollView>

        </>


     )
 }

 const styles = StyleSheet.create({
    container: {
     flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width:'100%'
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });