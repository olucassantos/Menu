import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Criando o Drawer Navigator
const Drawer = createDrawerNavigator();

// Importando as telas da pasta telas
import TelaInicio from "./telas/TelaInicio";
import TelaSobre from "./telas/TelaSobre";
import TelaContato from "./telas/TelaContato";

function App () {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Inicio">
                <Drawer.Screen options={{ drawerLabel: "Eu" }} name="Inicio" component={TelaInicio} />
                <Drawer.Screen name="Sobre" component={TelaSobre} />
                <Drawer.Screen name="Contato" component={TelaContato} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;