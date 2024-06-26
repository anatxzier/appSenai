import { StyleSheet, View, Text, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import useColor from "../Temas/Temas";

type FooterProps = {
    cor: string
    corele: string
}

function Footer ({cor, corele}: FooterProps){
    const color = useColor()
    const styles = StyleSheet.create({
        container:{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 20,
            borderTopWidth: 1,
            borderColor: '#CBCBCB',
  
        },
    
        icone:{
            marginTop: 20,
        }
    })
    
    return(
        <>
        <View style = {[styles.container, {backgroundColor: color.bgPrimary}]}>
            <Ionicons style={styles.icone} name="camera-reverse" size={24} color={corele} />
            <FontAwesome5 style={styles.icone}  name="list-ol" size={24} color={corele} />
        </View>
        </>
    )
}


export default Footer