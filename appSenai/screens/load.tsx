import { StyleSheet, View, Text, Image} from "react-native";

export default function Loading(){
    return(
        <>

        <View style={styles.logo}>
        <Image
        
        source={require('../assets/Logo.png')}
        />
        </View>


        </>

    )
}

const styles = StyleSheet.create({
    logo:{
        alignItems: 'center',
        marginTop: 300,

    },

    fundo:{
        backgroundColor: '#FF0000',
    }
})