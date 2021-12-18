




import React, {createContext, useState} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
//import CalendarPicker from the package we installed
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { AntDesign } from '@expo/vector-icons';




 export const Calender = ({setStartDate,setShow}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
//   const [selectedEndDate, setSelectedEndDate] = useState(null);
   

  const onDateChange = (date, type) => {
    setStartDate("aaa");
    const maxDate = moment(date).format('DD/MM/YYYY');
    setStartDate(maxDate);
    setShow(false);
    
  };

  return (
    // <SafeAreaView style={styles.container}>

      <View style={styles.container}>

        {/* <Text style={styles.titleStyle}>
          React Native Calendar Picker
        </Text> */}
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={false}
          minDate={new Date(2018, 1, 1)}
        //   maxDate={new Date(2050, 6, 3)}
        defaultBackgroundColor='#FFFFFF'
          width={320}
          weekdays={
            [ 
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ]}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          
          todayBackgroundColor="#e6ffe6"
        //  todayBackgroundColor="#FFFFFF"
          selectedDayColor='#FFFFFF'
          
          selectedDayTextStyle={{color:'red'}}
          dayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            // fontFamily: 'Cochin',
            color: '##FFFFFF',
            margingLeft:10
          }}
          onDateChange={onDateChange}
        />
       
      
      </View>
    // </SafeAreaView>
  );
};
export default Calender;

const styles = StyleSheet.create({
  container: {
      height:300,
      width:365,
      marginLeft:10,
    // flex: 1,
    // paddingTop: 30,
    backgroundColor: 'white',
    // padding:45,
    // marginRight:14,
    zIndex:2
  },
  textStyle: {
    marginTop: 10,
    
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
});

