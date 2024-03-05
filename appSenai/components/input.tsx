import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native';


interface Inputprops extends TextInputProps {
  nome: string
}

const Input = ({ nome, ...props }: Inputprops) => {
  return (
    <View>
      <Text style={styles.texto}>{nome}</Text>
      <TextInput  {...props} style={styles.camp} />
    </View>
  );
};

const styles = StyleSheet.create({



  camp: {
    marginLeft: 3,
    backgroundColor: '#F5F5F5',
    width: 320,
    height: 40,
    borderRadius: 5,
    padding: 10,


    

  },

  texto: {
    marginLeft: 3,
    marginBottom: 10,
    fontSize: 17,

    

  }
});

export default Input;
