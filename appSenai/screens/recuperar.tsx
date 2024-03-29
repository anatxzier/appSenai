import { StyleSheet, View, Text } from "react-native";
import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";

export default function Recuperar(){
    return(
        <>
        <View>
        <Header cor="#011E83" texto="Recuperação de Senha"/> 
        </View>

        <View style={styles.container}>
        <Text style={styles.texto} >Insira o seu e-mail para recuperar a sua senha!</Text>
        <Input nome="Email:" placeholder="Insira o seu email:"/>
        <Button texto="Prosseguir" />


        </View>

        </>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 50,
        gap: 20,
        
    },

    texto:{

        marginBottom: 30,
        fontSize: 18,
        fontWeight: '500',
        maxWidth: 300,
        textAlign: 'center',

    },
    
})