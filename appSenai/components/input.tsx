import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native';

type Cores = {
  inputbgPrimaryVariant: string;
  inputbgHover: string;
  inputtextcolorPrimaryVariant: string;
};


interface InputProps extends TextInputProps{
  nome: string
  cor: Cores
}


const Input = ({ nome, ...props }: InputProps) => {
  const [hover, sethover] =useState(props.cor.inputbgPrimaryVariant)

  const styles = StyleSheet.create({



    camp: {
      marginLeft: 3,
      width: 320,
      height: 40,
      borderRadius: 5,
      padding: 10,
      borderWidth: 1,
      borderColor: hover,
      backgroundColor: props.cor.inputbgPrimaryVariant,
  
  
      
  
    },
  
    texto: {
      marginLeft: 3,
      marginBottom: 10,
      fontSize: 17,
      color: props.cor.inputtextcolorPrimaryVariant,
  
      
  
    }
  });

  return (
    <View>
      <Text style={styles.texto}>{nome}</Text>
      <TextInput  {...props} style={styles.camp} placeholderTextColor={props.cor.inputtextcolorPrimaryVariant} onFocus={() =>{
          sethover(props.cor.inputbgHover)
      }} onBlur={()=>{
        sethover(props.cor.inputbgPrimaryVariant)
      }}
      />
    </View>
  );
};



export default Input;
