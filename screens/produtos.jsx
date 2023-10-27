import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import { styles } from "../style.js";

export default function Produtos() {
	const [produtos, setProdutos] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/produtos")
			.then((resp) => setProdutos(resp.data));
	}, []);

	const renderItem = ({ item }) => (
		<View style={styles.card}>
			<Image source={{ uri: item.caminhoImagem }} style={styles.image} />
			<Text style={styles.name}>{item.nome}</Text>
			<Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Nossos Produtos</Text>
			<FlatList
				style={{ width: "100%" }}
				data={produtos}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}
