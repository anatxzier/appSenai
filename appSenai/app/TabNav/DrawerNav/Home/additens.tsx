import {View, StyleSheet, ScrollView} from 'react-native';
import Input2 from '@comp/input2';
import useColor from '../../../../Temas/Temas';

export default function Cadastro_de_itens() {
  const cores = useColor()
  const stylesCadInv = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: cores.bgPrimary
    },
  
    container2:{
      paddingTop: 30,
    },
  
  })
  return (
    <>
      <View style={stylesCadInv.container}>
        <ScrollView  style={stylesCadInv.container2}>
          <Input2 cor={cores} texto="N° Inventário"/>
          <Input2 cor={cores} texto="Descrição"/>
          <Input2 cor={cores} texto="Local"/>
          <Input2 cor={cores} texto="Responsável"/>
          <Input2 cor={cores} texto="Data de Registro"/>
        </ScrollView>
      </View>
    </>
  );
}