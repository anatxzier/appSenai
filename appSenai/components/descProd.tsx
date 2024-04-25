import { StyleSheet, View, Text } from "react-native";
import useColor from "../Temas/Temas";

type DescProps = {
    titulo: string;
    texto: string;
}

function Desc ({titulo, texto}: DescProps){
    const color = useColor();

    const style = StyleSheet.create({
        container:{
            alignContent: 'flex-start',
            width: '100%',
            height: 115,
        },
        titulo:{
            fontWeight: '600',
            marginLeft: 60,
            marginTop: 50,
            color: color.textcolorPrimary
        },
        text:{
            marginLeft: 60,
            color: color.textcolorPrimary
        }
    });

    return (
        <View style={style.container} >
            <Text style={style.titulo} >{titulo}</Text>
            <Text style={style.text}>{texto}</Text>
        </View>
    );
}

export default Desc;
