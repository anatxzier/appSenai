import { StyleSheet, View } from "react-native";
import Nav from "@comp/nav";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Footer from "@comp/footer";
import Desc from "@comp/descProd";
import Btn from "@comp/btn";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Descrição(){
    return(
        <>
        <Nav 
            texto="Descrição do item"
            cor="#ff0000" 
            corTexto="#fff"
            icone1={<AntDesign name="arrowleft" size={30} color="white" />}
            icone2={<Ionicons name="reload-outline" size={30} color="white" />}    
            />

        
        <View style={styles.container}>
            <Desc titulo="N° do inventário" texto="957689"/>
            <Desc titulo="Descrição" texto="CADEIRA GIRATÓRIA"/>
            <Desc titulo="Responsável" texto="Carlos"/>
            <Desc titulo="Sala" texto="C13"/>
            <Desc titulo="Data de registro" texto="05/03/2024"/>
            <Btn icone={<MaterialCommunityIcons name="pencil-circle" size={75} color="#ff0000" />}/>
        </View>
        <Footer cor="#fff" corele="#000"/>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
      },
    });