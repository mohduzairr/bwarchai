// import React, {createContext, useState} from 'react';

// // import all the components we are going to use
// import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
// //import CalendarPicker from the package we installed
// import CalendarPicker from 'react-native-calendar-picker';
// import moment from 'moment';
// import { AntDesign } from '@expo/vector-icons';




//  export const Calender = ({setStartDate,setEndDate,setCalendershow}) => {
//   const [selectedStartDate, setSelectedStartDate] = useState(null);
//   const [selectedEndDate, setSelectedEndDate] = useState(null);
   

//   const onDateChange = (date, type) => {
//     //function to handle the date change
//     if (type === 'END_DATE') {
//       setSelectedEndDate(date);
//       const maxDate = moment(date).format('DD/MM/YYYY');
//       setEndDate(maxDate);
//       setCalendershow(false);

//     } else {
//       setSelectedStartDate(date);
//       const maxDate = moment(date).format('DD/MM/YYYY');

//       setStartDate(maxDate);
//     }
//   };

//   return (
//     // <SafeAreaView style={styles.container}>

//       <View style={styles.container}>

//         {/* <Text style={styles.titleStyle}>
//           React Native Calendar Picker
//         </Text> */}
//         <CalendarPicker
//           startFromMonday={true}
//           allowRangeSelection={true}
//           minDate={new Date(2018, 1, 1)}
//           maxDate={new Date(2050, 6, 3)}
//           width={300}
//           weekdays={
//             [ 
//               'Mon', 
//               'Tue', 
//               'Wed', 
//               'Thur', 
//               'Fri', 
//               'Sat', 
//               'Sun'
//             ]}
//           months={[
//             'January',
//             'Febraury',
//             'March',
//             'April',
//             'May',
//             'June',
//             'July',
//             'August',
//             'September',
//             'October',
//             'November',
//             'December',
//           ]}
//           previousTitle="Previous"
//           nextTitle="Next"
//           // todayBackgroundColor="#e6ffe6"
//          todayBackgroundColor="#e6ffe6"
//           selectedDayColor='#2B78F7'
          

//           selectedDayTextColor="#000000"
//           scaleFactor={375}
//           textStyle={{
//             // fontFamily: 'Cochin',
//             color: '#000000',
//             margingLeft:10
//           }}
//           onDateChange={onDateChange}
//         />
       
      
//       </View>
//     // </SafeAreaView>
//   );
// };
// export default Calender;
// export {GuestCheckin};

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // paddingTop: 30,
//     // backgroundColor: 'blue',
//     // padding:45,
//     // marginRight:14,
//     zIndex:2
//   },
//   textStyle: {
//     marginTop: 10,
//   },
//   titleStyle: {
//     textAlign: 'center',
//     fontSize: 20,
//     margin: 20,
//   },
// });

