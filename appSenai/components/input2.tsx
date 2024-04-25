import { StyleSheet, Text,View, TextInput, TextInputProps } from "react-native"
import { useState } from "react"
import { Cores } from '../Temas/Temas';

interface InputInvProps extends TextInputProps{
    texto: string
    cor: Cores
}

export default function InputInv ({texto, ...props}: InputInvProps) {
    const [hover, setHover] = useState(props.cor.inputtextcolorPrimaryVariant)
    const styles = StyleSheet.create({
        container1:{
            paddingLeft:30,
            paddingRight:30
        },

        container2:{
          height: 50,
          width: "100%",
          borderWidth: 1,
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 50,
          borderColor: hover,
          zIndex: -1,
          padding: 15
        },
        
        titlee:{
          position: "absolute",
          color: hover,
          fontWeight: "600",
          marginTop: 40,
          marginStart: 25,
          paddingStart: 10,
          paddingEnd: 10,
          backgroundColor: props.cor.bgPrimary,
          zIndex: 1
        },
      
        asterisco:{
          color: props.cor.bgSecundary
        },
      })

    return(
        <View style={styles.container1}>
            <View>
                <Text style={styles.titlee}>{texto}<Text style={styles.asterisco}> *</Text></Text>
            </View>
            <View style={styles.container2}>
                <TextInput {...props} onFocus={() => {
            setHover(props.cor.inputbgHover)
          }} onBlur={()=>{
            setHover(props.cor.inputtextcolorPrimaryVariant)
          }}/>
            </View>
        </View>
    )

}