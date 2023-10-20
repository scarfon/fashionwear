import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={require("./assets/logo.png")} />
			<Text style={styles.titulo}>Faça seu login</Text>
			<Text style={{ fontSize: 18 }}>Para começar a vender</Text>
			<TextInput style={styles.input} placeholder="e-mail" />
			<TextInput style={styles.input} placeholder="Senha" secureTextEntry />
			<Text style={styles.botao}>Entrar</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FCFBFF",
		alignItems: "center",
		justifyContent: "center",
	},
	titulo: {
		color: "#121a2c",
		fontSize: 28,
		fontWeight: "bold",
	},
	input: {
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 4,
		borderColor: "#747474",
		borderWidth: 1,
		marginVertical: 20,
		width: "50%",
	},
	botao: {
		backgroundColor: "black",
		color: "#FFFFFF",
		paddingVertical: 8,
		paddingHorizontal: 60,
		borderRadius: 4,
	},
	img: {
		width: "100%",
		height: 300,
		position: "absolute",
		top: 0,
	},
});
