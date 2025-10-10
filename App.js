import { StatusBar } from 'expo-status-bar';
import {button, StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.inputConteiner}>

        <Text style={styles.Textstyle}>
           peso en kilogramos de la persona </Text>

        <TextInput style={styles.InputStyle}
         keyboardType='numeric'/>
      
        <Text style={styles.Textstyle}> estatura en metros de la persona </Text>

        <TextInput style={styles.InputStyle}
        keyboardType='numeric' />
      
      </View>

      <View style={styles.commandContainer}>
      <button title='CALCULAR'/>
      <button title='LIMPIAR'/>
      </View>

      <View style={styles.textResultStyle}>
           <Text> El indice de masa corporal de la persona es:</Text>
           <Text style={styles.textResultStyle}>    24 </Text>
           <Text>    El Estado nutricional  de la persona es: </Text>
           <Text style={styles.textResultStyle}>   Peso Normal </Text>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    marginVertical: 24,
    marginHorizontal: 24,
    backgroundColor: '#fff',
   
  },

inputConteiner:{
 borderwhitd: 2,
 borderColor:'gray',
 padding:16
},
Textstyle:{
 fontSize: 26,
},
InputStyle :{
  fontSize: 16,
  borderWidth: 16,
  borderColor: 'gray',
  marginVertical: 16,
},
commandContainer: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginVertical: 32,
}, 

resultContainer: {
  borderColor: 'orange',
  borderwhitd: 1,
  borderRadius:10,
  padding:16
},
textResultStyle: {
  fontSize: 24,
  fontWeight : 'bold',
  textAlign: 'center',
  marginVertical: 8 ,
}

});

