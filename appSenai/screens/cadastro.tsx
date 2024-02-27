import { StyleSheet, View, Text } from "react-native";
import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";

export default function Cadastro(){
    return(
        <>
        <View>
        <Header cor="#FF0000" texto="Cadastre-se"/>
        </View>

        <View style={styles.container}>
        <Input nome="Nome:" texto="Insira o seu nome:"/>
        <Input nome="Sobrenome:" texto="Insira o seu sobrenome:"/>
        <Input nome="Email:" texto="Insira o seu telefone:"/>
        <Input nome="Senha:" texto="Insira a sua senha:"/>
        <Input nome="Senha:" texto="Insira a sua senha:"/>
        <Button texto="Cadastre-se" />
        </View>



        
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 20,
        gap: 30,
        
    },


})