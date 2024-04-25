import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Nav from "@comp/nav";
import Produto from "@comp/produto";
import Footer from "@comp/footer";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Btn from "@comp/btn";
import { AntDesign } from '@expo/vector-icons';
import useColor from "../../../../Temas/Temas";


export default function Inventario(){
    const color = useColor()
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position:'relative',
            backgroundColor: color.bgPrimary
        },

        });
    return(

        <>

        <View style={styles.container}>


        <ScrollView >
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        <Produto numero="956389" nome="CADEIRA SENAI"/>
        </ScrollView>
        
        <Btn icone={<AntDesign name="pluscircle" size={70} color="#ff0000" />} />
        </View>


        
        </>
    )
}

