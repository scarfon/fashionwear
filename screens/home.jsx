import {
	Image,
	Text,
	StatusBar,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { styles } from "../style.js";

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={require("../assets/logo.png")} />
			<Text style={styles.titulo}>Bem-vindo à nossa Loja de Moda!</Text>
			<Text style={{ fontSize: 18 }}>
				Explore as últimas tendências e estilos.
			</Text>
			<TouchableOpacity onPress={() => navigation.navigate("Produtos")}>
				<Text style={styles.botao}>Ver Produtos</Text>
			</TouchableOpacity>
		</View>
	);
}
