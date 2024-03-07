import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

type NavProps ={
    cor:string
    corTexto: string
    texto: string
    icone1: JSX.Element
    icone2: JSX.Element
}

function Nav({icone1, icone2, cor, texto, corTexto}: NavProps){
    return(
        <>
        <View style={[styles.container, {backgroundColor: cor} ]}>
            {icone1}
            <Text style={[styles.texto, { color: corTexto }]}>{texto}</Text>
            {icone2}

        </View>
        
        </>
    )
}

export default Nav

const styles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        textAlign: 'center',
        justifyContent:'space-around',
        color: '#fff',
        padding: 20,

        
        



    },

    texto:{
        fontSize: 14,
        fontWeight: '600',
        


    }
})