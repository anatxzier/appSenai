import { StyleSheet, View, Text } from "react-native";
import Header from "@comp/header";
import Input from "@comp/input";
import LinkBtn from "@comp/button";
import useColor from "../../Temas/Temas";

export default function Recuperar(){
    const color = useColor()
    const styles = StyleSheet.create({
        container:{
            alignItems: 'center',
            height: '100%',
            gap: 20,
            backgroundColor: color.bgPrimary
            
        },
    
        texto:{
    
            marginBottom: 30,
            marginTop: 50,
            fontSize: 18,
            fontWeight: '500',
            maxWidth: 300,
            textAlign: 'center',
            color: color.textcolorPrimary,
    
    
        },
        
    })
    return(
        <>
        <View>

        <Header cor={color.nome === 'dark' ? color.bgPrimary : '"#011E83"'} texto="Recuperação de Senha"/> 
        </View>

        <View style={styles.container}>
        <Text style={styles.texto} >Insira o seu e-mail para recuperar a sua senha!</Text>
        <Input nome="Email:" placeholder="Insira o seu email:" cor={color}/>
        <LinkBtn nome="Prosseguir" href="" cor={color} />


        </View>

        </>
    )
}

