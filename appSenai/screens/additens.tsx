import { StyleSheet , Text, View} from "react-native";
import Nav from "../components/nav";
import { AntDesign } from '@expo/vector-icons';

export default function Add(){
    return(
        <>
        <View>
        <Nav cor="#ff0000" 
        corTexto="#000"
        icone1={<AntDesign name="arrowleft" size={30} color="white" />} 
        texto  ='Cadastro de itens'
        icone2={<AntDesign name="pluscircleo" size={30} color="white" />}/>
        </View>
        </>
    )
}

