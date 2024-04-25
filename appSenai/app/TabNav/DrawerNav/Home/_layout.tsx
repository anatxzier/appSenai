import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import useColor from "../../../../Temas/Temas";

export default function layout(){
    const color = useColor()
    return(
        <Stack>
            <Stack.Screen name="inventario" options={{
                headerTintColor: color.inputtextcolorPrimaryVariant,
                headerStyle: {
                    backgroundColor: color.bgPrimary
                },
                headerTitleAlign: 'center',
                headerLeft: ()=> (<DrawerToggleButton tintColor={color.inputtextcolorPrimaryVariant}/>),
                headerSearchBarOptions: {
                    headerIconColor: color.inputtextcolorPrimaryVariant,
                    textColor: color.inputtextcolorPrimaryVariant, 
                },
                
                
            }}/>
            <Stack.Screen name="additens" options={{
                headerTintColor: color.inputtextcolorPrimaryVariant,
                headerStyle: {
                    backgroundColor: color.bgPrimary
                }
            }}/>

                <Stack.Screen name="descricao" options={{
                headerTintColor: color.inputtextcolorPrimaryVariant,
                headerStyle: {
                    backgroundColor: color.bgPrimary
                }
            }}/>

                <Stack.Screen name="editar" options={{
                headerTintColor: color.inputtextcolorPrimaryVariant,
                headerStyle: {
                    backgroundColor: color.bgPrimary
                }
            }}/>

        </Stack>

    )
}