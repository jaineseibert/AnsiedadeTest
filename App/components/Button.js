import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
  text: {
    color: "#778899",
    fontSize: 20,
    textAlign: "center"
  },
  textButonInicio: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  textButonFim: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between"
  },
  buttoninicio: {
    backgroundColor: "#FF9C00",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
  buttonFim: {
    backgroundColor: "#FF9C00",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    marginTop: 60
  },
  buttonVoltar: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "flex-end",
    backgroundColor: "#FF9C00",
    borderRadius: 100
  }
});

export const Button = ({ text, onPress = () => { } }) => (
  <TouchableHighlight underlayColor="#0ec724" onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableHighlight>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);

export const ButtonInicio = ({ text, onPress = () => { } }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttoninicio}>
    <Text style={styles.textButonInicio}>{text}</Text>
  </TouchableOpacity>
);


export const ButtonFim = ({ text, onPress = () => { } }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonFim}>
    <Text style={styles.textButonFim}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonVoltar = ({ onPress = () => { } }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.buttonVoltar}>
    <Image source={require('../assets/voltar.png')} />
  </TouchableOpacity>
);
