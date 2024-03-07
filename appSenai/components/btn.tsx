import { StyleSheet, View, TouchableOpacity} from "react-native";

type BtnProps = {
    cor:string
    icone: JSX.Element
}

function Btn ({cor, icone}: BtnProps){
    return(
        <View style={styles.container} >
        <TouchableOpacity style={styles.overlay}>{icone}
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    overlay: {
        position: 'absolute',
        top: 300,
        right: 20, 
        zIndex: 1, 

      },
})

export default Btn