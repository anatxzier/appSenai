import { View, StyleSheet} from "react-native";
import Input2 from "@comp/input2";
import Nav from "@comp/nav";
import { AntDesign } from '@expo/vector-icons';
import Footer from "@comp/footer";
import useColor from "../../../../Temas/Temas";

export default function Editar(){
    const color = useColor()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: 'relative',
            backgroundColor: color.bgPrimary
        }
    })

    return(
        <>
        <View style={styles.container} >

                <Input2 texto="N° Inventário" cor={color} />
                <Input2 texto="Descrição" cor={color}/>
                <Input2 texto="Local" cor={color} />
                <Input2 texto="Responsável" cor={color} />
                <Input2 texto="Data de registro" cor={color} />

        </View>
        
        </>
    )
}