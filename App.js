import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.inputConteiner}>

        <Text style={styles.Textstyle}>
           Peso en kilogramos de la persona </Text>

        <TextInput style={styles.InputStyle}
         keyboardType='numeric'/>
      
        <Text style={styles.Textstyle}> Estatura en metros de la persona </Text>

        <TextInput style={styles.InputStyle}
        keyboardType='numeric' />
      
      </View>

      <View style={styles.commandContainer}>
      <Button title='CALCULAR'/>
      <Button title='LIMPIAR'/>
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
 fontSize: 18,
},
InputStyle :{
  fontSize: 16,
  borderWidth: 2,
  borderColor: 'gray',
  marginVertical: 5,
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

