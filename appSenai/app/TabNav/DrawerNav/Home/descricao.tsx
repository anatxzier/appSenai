import { StyleSheet, View } from "react-native";
import Nav from "@comp/nav";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Footer from "@comp/footer";
import Desc from "@comp/descProd";
import Btn from "@comp/btn";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useColor from "../../../../Temas/Temas";

export default function descricao() {
    const color = useColor();
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: 'relative',
            backgroundColor: color.bgPrimary
        },
    });

    return (
        <>
            <View style={styles.container}>
                <Desc titulo="N° do inventário" texto="957689" />
                <Desc titulo="Descrição" texto="CADEIRA GIRATÓRIA"  />
                <Desc titulo="Responsável" texto="Carlos"  />
                <Desc titulo="Sala" texto="C13"  />
                <Desc titulo="Data de registro" texto="05/03/2024"  />
                <Btn icone={<MaterialCommunityIcons name="pencil-circle" size={75} color="#ff0000" />}  />
            </View>
            <Footer cor={color.bgPrimary} corele={color.textcolorPrimary} />
        </>
    );
}
