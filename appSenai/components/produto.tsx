import { StyleSheet, Text, View, TextInput } from 'react-native';

type produtoProps = {
    numero: string
    nome: string

}

const Produto = ({numero, nome}: produtoProps) => {
    return(
        <>
        <View style={styles.container}>
        <Text style={styles.texto1} >{numero}</Text>
        <Text style={styles.texto2}>{nome}</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 66,
        borderWidth: 1,
        borderColor: '#F5F5F5',
        justifyContent: 'center',



    },

    texto1 :{
        marginLeft: 30,
        fontWeight: '600',
    },

    texto2: {
        marginTop: 5,
        marginLeft: 30,
        fontWeight: '400',
    }


})

export default Produto