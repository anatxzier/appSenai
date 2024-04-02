import { StyleSheet, View, Text, TouchableOpacity, } from "react-native";
import Header from "@comp/header";
import Input from "@comp/input";
import { Link } from 'expo-router';
import LinkBtn from "@comp/button";

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
        <LinkBtn title="Login" href="drawer" />

        <View style={styles.container2}>
        <Link href="telasIniciais/cadastro" asChild>
        <TouchableOpacity>
        <Text style={styles.texto2}>Cadastre-se</Text>
        </TouchableOpacity>
        </Link>

        <Link href="telasIniciais/recuperar" asChild>
            <TouchableOpacity>
            <Text style={styles.texto2}>Esqueceu a senha?</Text>
            </TouchableOpacity>
        </Link>

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