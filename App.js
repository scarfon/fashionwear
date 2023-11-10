import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login";
import Home from "./screens/home";
import Produtos from "./screens/produtos";
import { AuthProvider } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Stack.Navigator>
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Produtos" component={Produtos} />
				</Stack.Navigator>
			</AuthProvider>
		</NavigationContainer>
	);
}
