import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import useColor from '../Temas/Temas';
import { Link } from 'expo-router';


export default function Produto ({ ...props}) {
    const color = useColor()

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 66,
        borderWidth: 1,
        borderColor: color.nome === 'dark' ? '#3A2828' : '#F5F5F5',
        justifyContent: 'center',
        backgroundColor: color.bgPrimary



    },

    texto1 :{
        marginLeft: 30,
        fontWeight: '600',
        color: color.textcolorPrimary
    },

    texto2: {
        marginTop: 5,
        marginLeft: 30,
        fontWeight: '400',
        color: color.textcolorPrimary
    }


})


    return(
        <Link href={props.link} asChild>
        <TouchableOpacity style={styles.container}>
        <Text style={styles.texto1} >{props.numero}</Text>
        <Text style={styles.texto2}>{props.nome}</Text>
        </TouchableOpacity>
        </Link>
    )
}

