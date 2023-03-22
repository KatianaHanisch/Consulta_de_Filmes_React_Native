import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import { api } from "./src/services/api";

import CardFilme from "./src/components/CardFilme";

export default function App() {
  const [filmes, setFilmes] = useState("");

  async function getFilmes() {
    const { data } = await api.get("r-api?api=filmes");
    setFilmes(data);
  }

  useEffect(() => {
    getFilmes();
  }, []);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
