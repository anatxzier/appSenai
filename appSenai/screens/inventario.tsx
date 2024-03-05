import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Nav from "../components/nav";
import Produto from "../components/produto";
import Footer from "../components/footer";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Inventario(){
    return(
        <>
        <View style={styles.container}>
        <Nav cor='#000' icone1={<Feather name="menu" size={30} color="black" />} texto={"Lista"} icone2={<MaterialIcons name="search" size={30} color="black" />}/>


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

        <TouchableOpacity>
        <Ionicons style={styles.overlay} name="add-circle" size={80} color="red" />
        </TouchableOpacity>
        <Footer cor='#ff0000' />

        </View>



        
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      overlay: {
        position: 'absolute',
        bottom: 20, 
        right: 20, 
        zIndex: 1, 
      },
    });