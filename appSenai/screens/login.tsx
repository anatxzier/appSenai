import { StyleSheet, View, Text } from "react-native";
import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";


export default function Login(){
    return(
        <>
        <Header cor="#000" texto="Login"/>
        <Input nome="Email:" texto="Insira o seu email:"/>
        <Button texto="Cadastre-se" />

        </>
    )
}