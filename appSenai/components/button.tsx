import { StyleSheet, View, Text } from "react-native";

function Button ({texto}){
    return(
        <>
        <View style={styles.botao}>
            <Text style={styles.texto}>{texto}</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#000',
        width: 320,
        height: 45,
        borderRadius: 10,
    },

    texto: {
        color: '#ffffff',
        marginTop: 13,
        textAlign: 'center',

    }
})


export default Button 