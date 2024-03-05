import { StyleSheet, View, Text, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

type FooterProps = {
    cor: string
}

function Footer ({cor}: FooterProps){
    return(
        <>
        <View style = {[styles.container, {backgroundColor: cor}]}>
            <Ionicons style={styles.icone} name="camera-reverse" size={24} color="white" />
            <FontAwesome5 style={styles.icone}  name="list-ol" size={24} color="white" />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },

    icone:{
        marginTop: 20,
    }
})

export default Footer