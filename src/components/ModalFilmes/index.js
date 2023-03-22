import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function ModalFilmes({ fecharModal, data }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerModal}>
        <View style={styles.containerDetalhes}>
          <View style={styles.containerTitulo}>
            <Text style={styles.tituloFilme}>{data.nome}</Text>
            <Text style={styles.tituloSinopse}>Sinopse:</Text>
            <Text style={styles.sinopseFilme}>{data.sinopse}</Text>
          </View>
        </View>
        <View style={styles.areaButton}>
          <TouchableOpacity style={styles.button} onPress={fecharModal}>
            <Text style={styles.buttonTexto}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  containerModal: {
    backgroundColor: "#273142",
    opacity: 1,
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  areaButton: {
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#fc3a51",
    width: "50%",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTexto: {
    fontSize: 15,
    color: "#ffffff",
  },
  containerDetalhes: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: 15,
  },
  tituloFilme: {
    color: "#ffff",
    fontSize: 25,
    textAlign: "center",
  },
  tituloSinopse: {
    color: "#ffff",
    fontSize: 20,
    marginTop: 10,
  },
  sinopseFilme: {
    color: "#ffff",
    marginTop: 10,
    fontSize: 15,
  },
});
