import { StyleSheet, View } from "react-native";
import Nav from "../components/nav";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Btn from "../components/btn";
import Footer from "../components/footer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Desc from "../components/descProd";

export default function Descrição(){
    return(
        <>
        <View style={styles.container}>
        <Nav 
            texto="Descrição do item"
            cor="#ff0000" 
            corTexto="#fff"
            icone1={<AntDesign name="arrowleft" size={30} color="white" />}
            icone2={<Ionicons name="reload-outline" size={30} color="white" />}    
            />
        </View>

        
        <View>
            <Desc titulo="N° do inventário" texto="957689"/>
            <Desc titulo="Descrição" texto="CADEIRA GIRATÓRIA"/>
            <Desc titulo="Responsável" texto="Carlos"/>
            <Desc titulo="Sala" texto="C13"/>
            <Desc titulo="Data de registro" texto="05/03/2024"/>
        </View>

        <Btn cor="ff0000" icone={<MaterialCommunityIcons name="pencil-circle" size={70} color="red" />}></Btn>
        <Footer cor="#fff" corele="#000"/>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    });