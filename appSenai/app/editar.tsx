import { View } from "react-native";
import Input2 from "@comp/input2";
import Nav from "@comp/nav";
import { AntDesign } from '@expo/vector-icons';
import Footer from "@comp/footer";

export default function Editar(){
    return(
        <>
        <View>
            <Nav cor="#ff0000"
            corTexto="#fff"
            texto="Editar"
            icone1={<AntDesign name="arrowleft" size={30} color="white" />}
            icone2={<AntDesign name="checkcircle" size={24} color="white" />}></Nav>

                <Input2 nome="N° Inventário" />
                <Input2 nome="Descrição" />
                <Input2 nome="Local" />
                <Input2 nome="Responsável" />
                <Input2 nome="Data de registro" />

        </View>
        <Footer cor='#fff' corele="#000" />
        
        </>
    )
}