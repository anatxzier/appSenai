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
    marginLeft: 50,
    backgroundColor: '#F5F5F5',
    width: 320,
    height: 45,
    borderRadius: 5,
    padding: 10,
    gap: 10,

    

  },

  texto: {
    marginLeft: 50,
    marginBottom: 30,
    fontSize: 17,

    

  }
});

export default Input;
