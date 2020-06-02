import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { ButtonFim } from "../components/Button";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    circle: {
        backgroundColor: "#FFFF00",
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    circleCorrect: {
        backgroundColor: "#28A125"
    },
    icon: {
        width: screen.width / 3
    },
    frase: {
        fontSize: 25,
        textAlign: "center",
        letterSpacing: -0.02,
        fontWeight: "600"
    },
    ButtonSection: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
});

class Resultado extends React.Component {
    state = {
        resposta1: this.props.navigation.getParam("resposta1"),
        resposta2: this.props.navigation.getParam("resposta2"),
        resposta3: this.props.navigation.getParam("resposta3"),
        resposta4: this.props.navigation.getParam("resposta4"),
        resposta5: this.props.navigation.getParam("resposta5"),
        resposta6: this.props.navigation.getParam("resposta6"),
        resposta7: this.props.navigation.getParam("resposta7"),
        resposta8: this.props.navigation.getParam("resposta8"),
        mensagem: 'Foram detectados sintomas excessivos de ansiedade. Sua saúde mental pode merecer um pouco de atenção. Que tal procurar a ajuda profissional de um psicólogo?'
    };

    render() {
        const icon = (this.state.score < 30)
            ? require("../assets/check.png")
            : require("../assets/atencao.png");

        const circleStyles = [styles.circle];

        if (this.state.score < 50) {
            circleStyles.push(styles.circleCorrect);
            this.state.mensagem = 'Não foram detectados sintomas excessivos de ansiedade. Sua saúde mental parece estar ótima!';
        }

        return (
            <View style={styles.container}>
                <View style={circleStyles}>
                    <Image source={icon} style={styles.icon} resizeMode="contain" />
                </View>
                <Text style={styles.frase}>{this.state.mensagem}</Text>
                <View style={styles.ButtonSection}>
                <ButtonFim
                    key='1'
                    text='Voltar ao início'
                    onPress={() =>
                        this.props.navigation.navigate("QuizIndex")
                    }
                />
                </View>
            </View>
        );
    }
}

export default Resultado;
