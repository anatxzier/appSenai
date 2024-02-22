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
        height: 37,
    },

    texto: {
        color: '#ffffff',
        marginLeft:100,
    }
})


export default Button 