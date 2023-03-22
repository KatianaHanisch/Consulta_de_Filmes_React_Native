import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

import ModalFilmes from "../ModalFilmes";

export default function CardFilme({ data }) {
  const [openModal, setOpenModal] = useState(false);

  function abrirModal() {
    setOpenModal(true);
  }

  function fecharModal() {
    setOpenModal(false);
  }

  return (
    <View>
      <View style={styles.containerCard}>
        <Text style={styles.tituloFilme}>{data.nome}</Text>
        <Image style={styles.capaFilme} source={{ uri: data.foto }} />

        <View style={styles.areaButton}>
          <TouchableOpacity style={styles.button} onPress={abrirModal}>
            <Text style={styles.buttonTexto}>Leia mais</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <ModalFilmes data={data} fecharModal={fecharModal} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: "#fff",
    margin: 15,
    elevation: 2,
  },
  tituloFilme: {
    padding: 15,
  },
  capaFilme: {
    height: 250,
    zIndex: 2,
  },
  areaButton: {
    alignItems: "flex-end",
    marginTop: -45,
    zIndex: 9,
  },
  button: {
    width: 100,
    backgroundColor: "#09A6FF",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonTexto: {
    textAlign: "center",
    color: "#ffffff",
  },
});
