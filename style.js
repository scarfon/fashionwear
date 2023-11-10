import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
		textAlign: "center",
		marginBottom: 20,
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
		marginVertical: 20,
	},
	img: {
		width: "100%",
		height: 300,
		position: "absolute",
		top: 0,
	},
	card: {
		flex: 1,
		margin: 10,
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 10,
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: 10,
	},
	price: {
		fontSize: 16,
		color: "#888",
		marginTop: 5,
	},
	erro: {
		color: "red",
		fontSize: 16,
	},
});
