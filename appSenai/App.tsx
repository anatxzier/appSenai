import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import Login from './screens/login';
import Recuperar from './screens/recuperar';
import Cadastro from './screens/cadastro';
import Loading from './screens/load';
import Inventario from './screens/inventario';
import Add from './screens/additens';

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>

      <Add />


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
