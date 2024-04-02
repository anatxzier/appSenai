
import { StyleSheet, View, Text, Image } from "react-native";

type Headerprops = {
    cor: string,
    texto: string
}

function Header({cor , texto}: Headerprops){
    return(
        <>
        <View style ={[styles.container, {backgroundColor: cor}]} >
        <View style={styles.container2}>
        <Image
        
        source={require('@assets/Logo.png')}
        />
        <Text style={styles.textoo}>{texto}</Text>
        </View>

            
        </View>

        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 411,
        height: 250,
        borderRadius: 5,
    },

    container2:{
        alignItems:'center',
        marginTop: 100,
    },

    textoo:{
        color: "#ffffff",
        fontSize: 20,
        marginTop: 10,
        

    }

})

export default Header
