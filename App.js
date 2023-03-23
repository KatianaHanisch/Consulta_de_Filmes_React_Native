import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { api } from "./src/services/api";

import CardFilme from "./src/components/CardFilme";

export default function App() {
  const [filmes, setFilmes] = useState("");
  const [carregando, setCarregando] = useState(true);

  async function getFilmes() {
    const { data } = await api.get("r-api?api=filmes");
    setFilmes(data);
    setCarregando(false);
  }

  useEffect(() => {
    getFilmes();
  }, []);

  if (carregando) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color={"#121212"} size={55} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CardFilme data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
