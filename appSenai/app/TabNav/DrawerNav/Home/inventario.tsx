import { StyleSheet, View, Text, ScrollView, TouchableOpacity,  } from "react-native";
import Nav from "@comp/nav";
import Produto from "@comp/produto";
import Footer from "@comp/footer";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Btn from "@comp/btn";
import { AntDesign } from '@expo/vector-icons';
import useColor from "../../../../Temas/Temas";
import { Link } from "expo-router";

export default function Inventario(){
    const color = useColor()
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position:'relative',
            backgroundColor: color.bgPrimary
        },
        icn:{
            position: 'absolute',
            bottom: 35,
            right: 20,
            zIndex: 1
        }

        });
    return(

        <>

        <View style={styles.container}>
        <ScrollView >
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>
        <Produto link='TabNav/DrawerNav/Home/descricao' numero="956389" nome="CADEIRA SENAI"/>


        </ScrollView>

        <Link href="/TabNav/DrawerNav/Home/additens" asChild>
        <TouchableOpacity style={styles.icn} >
        <AntDesign name="pluscircle" size={70} color="#ff0000" />
        </TouchableOpacity>
             </Link>
        

        </View>


        
        </>
    )
}

