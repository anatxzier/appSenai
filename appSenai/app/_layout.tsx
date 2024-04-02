import { Stack } from "expo-router";

export default  function Layout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false 
            }}/>
            <Stack.Screen name="telasIniciais/recuperar" options={{
                headerTitle: "",
                headerTransparent: true,
                headerTintColor: "#fff"
            }}/>

            <Stack.Screen name="telasIniciais/cadastro" options={{
                headerTitle: "",
                headerTransparent: true,
                headerTintColor: "#fff"
            }}/>

        </Stack>

        
    )
}