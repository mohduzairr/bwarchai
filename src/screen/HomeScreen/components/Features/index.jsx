import React from 'react'

export const Features = () => {
    return (
        <>
           <View style= {{width:'100%',height:700,backgroundColor:'rgba(128, 128, 128, 0.8)',marginTop:60}}>
            <Text style={{textAlign:'center',fontSize:40,marginTop:20,fontWeight: 'bold',borderBottomWidth: 5,width:300,marginLeft:40,borderBottomColor: "rgba(255, 223, 0, 0.6)"}}>FEATURES</Text>
            < Text style={{marginTop:20,paddingLeft:10,lineHeight:35,fontSize:20,paddingTop:10,textAlign: 'justify'}} >
            Bmarchai Studios gives you the chance to be have free access to the same fitness secrets taught to some real models in L.A., and many of the workouts  have things you've never seen before. Way more that just squats and push-ups, are {'\n'} workouts include; 
            {'\n'}  lifting the breast area, inner thigh gap, toning the bra strap area, 
              lower pouch area (no not just knee tucks).{'\n'} and more. 
            </Text>
            <Text style={{paddingLeft:10,lineHeight:35,fontSize:20,paddingTop:10,textAlign: 'justify'}} > There's a free workout everyday, with no extra subscription needed,we don't even have a premium area because it's all premium</Text>
         </View>
        </>
    )
}
