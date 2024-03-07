import { StyleSheet, View, Text, TextInput, TextInputProps } from "react-native";
import { useState } from "react";

interface InputtProps extends TextInputProps {
    nome: string
}

const Input2 = ({ nome, ...props }: InputtProps) => {
const [hover, setHover] = useState("#000")

const styles = StyleSheet.create({
    container: {
        height: 51,
        width: 320,
        borderWidth: 1,
        borderColor: "#5d5c5c",
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 50,
        position: "relative",
        zIndex: 0,
        borderColor: hover
    },
    textt: {
        position: "absolute",
        top: -10, 
        left: 10, 
        backgroundColor: "#ffffff",
        zIndex: 1,
        fontWeight: '600',
    },
    input: {
        marginTop: 15, 
        marginLeft: 10, 
        width: "100%", 
    },
    asterisco: {
        color: "#ff0000"
    },
})
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textt}>{nome} <Text style={styles.asterisco}>*</Text></Text>
                <TextInput {...props} style={styles.input} onFocus={() =>{
                setHover('#f39200')
            }} onBlur={()=>{
                setHover("#000")
            }} />
            </View>
        </View>
    )
}


export default Input2
