
import { StyleSheet, View, Text, Image } from "react-native";
{}
function Header({cor , texto}){
    return(
        <>
        <View style ={[styles.container, {backgroundColor: cor}]} >
        <View style={styles.container2}>
        <Image style={styles.logo}
        
        source={require('../assets/Logo.png')}
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
