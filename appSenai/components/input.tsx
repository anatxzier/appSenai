import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({ nome, texto }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{nome}</Text>
      <TextInput style={styles.camp} placeholder={texto} />
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
