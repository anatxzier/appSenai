import { StyleSheet, View, Text, TouchableOpacity, } from "react-native";
import Header from "@comp/header";
import Input from "@comp/input";
import { Link } from 'expo-router';
import LinkBtn from "@comp/button";
import useColor from "../../Temas/Temas";

export default function Login() {
    const color = useColor();

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            gap: 20,
            backgroundColor: color.bgPrimary,
            height: '100%'
        },
        texto: {
            marginBottom: 30,
            fontSize: 18,
            fontWeight: '500',
            color: color.textcolorPrimary,
        },
        container2: {
            flexDirection: 'row',
            gap: 110,
        },
        texto2: {
            color: color.nome === 'dark' ?  color.inputtextcolorPrimaryVariant : color.bgInfo,
            fontSize: 15,
        }
    });

    return (
        <>
            <View>
                <Header cor={color.nome === 'dark' ? color.bgPrimary : '#000000'} texto="Login" />
            </View>

            <View style={[styles.container, { backgroundColor: color.bgPrimary }]}>
                <Text style={styles.texto}>Faça Login Para Acessar O Sistema!</Text>
                <Input nome="Email:" placeholder="Insira o seu email:" cor={color} />
                <Input nome="Senha:" placeholder="Insira a sua senha:" cor={color} />
                <LinkBtn nome="Login" href="TabNav" cor={color} />

                <View style={styles.container2}>
                    <Link href="telasIniciais/cadastro" asChild>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </Link>

                    <Link href="telasIniciais/recuperar" asChild>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </>
    );
}
