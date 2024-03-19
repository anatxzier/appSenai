import { StyleSheet, View, TouchableOpacity} from "react-native";

type BtnProps = {
    icone: JSX.Element
}

function Btn ({ icone}: BtnProps){
    return(
        <View style={styles.container} >
        <TouchableOpacity style={styles.overlay}>{icone}
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1, 
    },
});


export default Btn