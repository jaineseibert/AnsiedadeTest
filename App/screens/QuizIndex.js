import React from "react";
import { ScrollView, StyleSheet, StatusBar, Text, View, CheckBox } from "react-native";

import sintomasfisicos from "../data/sintomasfisicos";

import { ButtonInicio } from "../components/Button";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  textCheck: {
    fontSize: 20,
    letterSpacing: 0,
    fontWeight: "600",
    marginTop: 20,
    marginRight: 10
  },
  ButtonSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextSection: {
    marginTop: 50
  }, 
  Check: {
    marginLeft: 30,
    marginTop: 20
  }
});

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <View style={styles.TextSection}>
      <Text style={styles.text}>  A ansiedade é uma reação natural do ser humano e faz parte do nosso instinto de sobrevivência. 
      Todos os seres humanos possuem algum nível de ansiedade, é algo necessário. 
      O excesso desse instinto é que se torna prejudicial! 
      O objetivo do atual APP é verificar se esse instinto está excessivamente presente e não substitui a avaliação de um profissional. </Text>
    </View>
    <View style={styles.ButtonSection}>
      <ButtonInicio
        key='1'
        text='Iniciar teste'
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Sintomas físicos",
            questions: sintomasfisicos,
            color: "#FF9C00",
          })
        }
      />
      <View style={{ flexDirection: 'row' }}>
        <CheckBox style={styles.Check} value={true}/>
        <Text style={styles.textCheck}>Permitir a coleta de dados anônimos para fins de pesquisa</Text>
      </View>
    </View>

  </ScrollView>
);
