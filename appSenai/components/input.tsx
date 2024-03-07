import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native';


interface Inputprops extends TextInputProps {
  nome: string
}

const Input = ({ nome, ...props }: Inputprops) => {
  const [hover, setHover] = useState("#F5F5F5")

  const styles = StyleSheet.create({



    camp: {
      marginLeft: 3,
      backgroundColor: '#F5F5F5',
      width: 320,
      height: 40,
      borderRadius: 5,
      padding: 10,
      borderWidth: 1,
      borderColor: hover
  
  
      
  
    },
  
    texto: {
      marginLeft: 3,
      marginBottom: 10,
      fontSize: 17,
  
      
  
    }
  });

  return (
    <View>
      <Text style={styles.texto}>{nome}</Text>
      <TextInput  {...props} style={styles.camp} onFocus={() =>{
        setHover('#f39200')
      }} onBlur={()=>{
        setHover("#f5f5f5")
      }}
      />
    </View>
  );
};



export default Input;
