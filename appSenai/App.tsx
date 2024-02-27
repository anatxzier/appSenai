import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import Login from './screens/login';
import Recuperar from './screens/recuperar';
import Cadastro from './screens/cadastro';
import Loading from './screens/load';

export default function App() {
  return (
    <View>
      <StatusBar style="auto"/>

      <Cadastro />


    </View>
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
