import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import useColor from "../../../../Temas/Temas";
import Desc from "@comp/descProd";

export default function descricao() {
    const color = useColor()
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: 'relative',
            backgroundColor: color.bgPrimary
        },
        icn:{
            position: 'absolute',
            bottom: 35,
            right: 20,
            zIndex: 1
        }
    })

    return (
        <>
        <View style={styles.container}>
            <Desc titulo="N° do inventário" texto="957689" />
            <Desc titulo="Descrição" texto="CADEIRA GIRATÓRIA"  />
            <Desc titulo="Responsável" texto="Carlos"  />
            <Desc titulo="Sala" texto="C13"  />
            <Desc titulo="Data de registro" texto="05/03/2024"  />

            <Link href="/TabNav/DrawerNav/Home/editar" asChild>
                <TouchableOpacity style={styles.icn}>
                    <MaterialCommunityIcons name="pencil-circle" size={75} color="#ff0000" />
                </TouchableOpacity>
            </Link>
        </View>
        </>
    );
}