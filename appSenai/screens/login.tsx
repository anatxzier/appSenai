import { StyleSheet, View, Text } from "react-native";
import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";


export default function Login(){
    return(
        <>
        <View>
        <Header cor="#000" texto="Login"/>
        </View>

        <View style={styles.container}>
        <Text style={styles.texto} >Faça Login Para Acessar O Sistema!</Text>
        <Input nome="Email:" placeholder="Insira o seu email:"/>
        <Input nome="Senha:" placeholder="Insira a sua senha::"/>
        <Button texto="Cadastre-se" />

        <View style={styles.container2} >
        <Text style={styles.texto2}>Cadastre-se</Text>
        <Text style={styles.texto2}>Esqueceu a senha?</Text>
        </View>
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

    },

    container2:{
        flexDirection: 'row',
        gap: 110,
    },

    texto2:{
        color: '#011E83',
        fontSize: 15,
    }
})