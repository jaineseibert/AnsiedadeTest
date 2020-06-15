import React from 'react'
import { Alert, Image, TouchableOpacity, StyleSheet } from 'react-native'

const AlertExample = () => {
  const showAlert = () => {
    Alert.alert("Informações do sistema",
      "Versão: 1.0.0 \n " +
      "Criado por: Jaíne Seibert "
    )
  }
  return (
    <TouchableOpacity onPress={showAlert} activeOpacity={0.5} style={styles.buttonAjuda}>
      <Image source={require('../assets/Ajuda.png')} />
    </TouchableOpacity>
  );
}
export default AlertExample

const styles = StyleSheet.create({
  buttonAjuda: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "flex-end"
  },
})