import { StatusBar } from 'expo-status-bar';
import {  useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';


export default function App() {

  const[pesoText,setPesoText] = useState('');
  const[estaturaText,setEstaturaText] = useState('');
  const[imcText, seticmText] = useState('');
  const[EstadoNutriText,setEstadoNutriText]= useState('');
  function onCalcularButtonTapped (){
   /* console.log("el peso es "+ peso);
    console.log("la estatura es "+ estatura);*/

   const peso =  Number(pesoText);
   const estatura =  Number(estaturaText);
   const imc = newFunction(peso, estatura);
    seticmText(imc.toFixed(4))
 setEstadoNutriText(DeterminacionEstadoNutricional(imc));

  }

  return (
    <View style={styles.maincontainer}>
      
      <View style={styles.inputConteiner}>

        <Text style={styles.Textstyle}>
           Peso en kilogramos de la persona </Text>

        <TextInput style={styles.InputStyle}
         keyboardType='numeric' 
         onChangeText={setPesoText}
         value={pesoText} />
        
        
        <Text style={styles.Textstyle}> Estatura en metros de la persona </Text>

        <TextInput style={styles.InputStyle}
        keyboardType='numeric'  
         onChangeText={setEstaturaText}
         value={estaturaText}/>
      
      </View>

      <View style={styles.commandContainer}>
      <Button title='CALCULAR'
      onPress={onCalcularButtonTapped}/>
      <Button title='LIMPIAR'
      onPress={onLimpiar}/>
      </View>

      <View style={styles.textResultStyle}>
           <Text> El indice de masa corporal de la persona es:</Text>
           <Text style={styles.textResultStyle}>    
            {imcText} </Text>

           <Text>    El Estado nutricional  de la persona es: </Text>
           <Text style={styles.textResultStyle}>   {EstadoNutriText} </Text>

      </View>
      <StatusBar style="auto" />
    </View>
  );

  function newFunction(peso, estatura) {
    return peso /(estatura * estatura);
  }

  function DeterminacionEstadoNutricional(imc) {
    if(imc< 18.5){
        return "peso bajo";
    }
    if (imc < 25.0){
      return "normal";
    }
    if(imc < 30.0){
       return "sobrepeso";
    }
     if (imc < 40.0){
      return "Obecidad"
     }
  }
    


   function onLimpiar()
   {
    setPesoText('');
    setEstaturaText('');
    seticmText('');
    setEstadoNutriText('');
   }

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

