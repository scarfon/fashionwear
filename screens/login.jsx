import {
	Image,
	Text,
	StatusBar,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { styles } from "../style.js";

export default function Login({ navigation }) {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={require("../assets/logo.png")} />
			<Text style={styles.titulo}>Faça seu login</Text>
			<Text style={{ fontSize: 18 }}>Para começar a vender</Text>
			<TextInput style={styles.input} placeholder="e-mail" />
			<TextInput style={styles.input} placeholder="Senha" secureTextEntry />
			<TouchableOpacity onPress={() => navigation.navigate("Home")}>
				<Text style={styles.botao}>Entrar</Text>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</View>
	);
}
