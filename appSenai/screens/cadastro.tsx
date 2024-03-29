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
        <Input nome="Nome:" placeholder="Insira o seu nome:"/>
        <Input nome="Sobrenome:" placeholder="Insira o seu sobrenome:"/>
        <Input nome="Email:" placeholder="Insira o seu telefone:"/>
        <Input nome="Senha:" placeholder="Insira a sua senha:"/>
        <Input nome="Senha:" placeholder="Insira a sua senha:" secureTextEntry={true} />
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