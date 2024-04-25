import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Footer from '@comp/footer';
import Nav from '@comp/nav';
import Desc from '@comp/descProd';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import useColor from '../../../Temas/Temas';

export default function Descrição() {
    const color = useColor();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 30,
            backgroundColor: color.bgPrimary,
        },
        contentContainer: {
            paddingHorizontal: 20,
            paddingBottom: 20,
        },
        iconContainer: {
            position: 'absolute',
            bottom: 20,
            right: 20,
        },
    });

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.contentContainer}>
                    <Desc titulo="N° do inventário:" texto="957689" />
                    <Desc titulo="Descrição:" texto="Cadeira Giratória" />
                    <Desc titulo="Local:" texto="Sala C13" />
                    <Desc titulo="Responsável:" texto="Carlos" />
                    <Desc titulo="Data de registro:" texto="05/03/2024" />
                </View>
                <Link href="tabnav/DrawerNav/Home/Editar" asChild>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="pencil-circle" size={60} color="#FF0000" />
                    </View>
                </Link>
            </ScrollView>
        </>
    );
}
