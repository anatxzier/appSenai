import { StyleSheet, View, Text } from "react-native";

type DescProps = {
    titulo: string
    texto: string
}

function Desc ({titulo, texto}: DescProps){
    return(
    <>
    <View style={style.container} >
        <Text style={style.titulo} >{titulo}</Text>
        <Text  style={style.text}>{texto}</Text>

    </View>
    </>
)}

export default Desc

const style = StyleSheet.create({
    container:{
        alignContent: 'flex-start',
        width: '100%',
        height: 115,
        backgroundColor: '#FBFBFB',

    },

    titulo:{
        fontWeight: '600',
        marginLeft: 60,
        marginTop: 50,
    },
    text:{
        marginLeft: 60,
    }


})