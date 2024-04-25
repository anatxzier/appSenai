import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "@comp/header";
import Input from "@comp/input";
import LinkBtn from "@comp/button";
import useColor from "../../Temas/Temas";


export default function Cadastro(){
    const color = useColor()
    return (
      <View style={{backgroundColor: color.bgPrimary, height: '100%'}}>
        <ScrollView>
        <Header cor={color.nome === 'dark'? color.bgPrimary : color.bgSecundary} texto='Cadastre-se' />
        <View style={styles.container}>
          <Input nome='Nome' placeholder='Insira seu nome:' cor={color}/>
          <Input nome='Sobrenome' placeholder='Insira seu sobrenome:' cor={color}/>
          <Input nome='E-mail' placeholder='Insira seu e-mail:' cor={color}/>
          <Input nome='Telefone' placeholder='Insira seu telefone:' cor={color}/>
          <Input secureTextEntry nome='Senha' placeholder='Insira sua senha:' cor={color}/>
          <Input secureTextEntry nome='Confirmar senha' placeholder='Insira sua senha:' cor={color}/>
          <LinkBtn nome='Cadastrar-se' href="index" cor={color}/>
        </View>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 20,
        gap: 30,
        
    },


})