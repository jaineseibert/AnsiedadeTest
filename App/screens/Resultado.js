import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { ButtonFim } from "../components/Button";
import email from 'react-native-email';
import AlertExample from "../components/Alert";

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
        const somatoria = ((this.state.rresposta1 * 0) +
            (this.state.rresposta2 * 0) +
            (this.state.rresposta3 * 1) +
            (this.state.rresposta4 * 2) +
            (this.state.rresposta5 * 0) +
            (this.state.rresposta6 * 0) +
            (this.state.rresposta7 * 2) +
            (this.state.rresposta8 * 3));

        const icon = ((somatoria) == 0)
            ? require("../assets/check.png")
            : require("../assets/atencao.png");

        const circleStyles = [styles.circle];

        if (somatoria == 0) {
            circleStyles.push(styles.circleCorrect);
            this.state.mensagem = 'Não foram detectados sintomas excessivos de ansiedade. Sua saúde mental parece estar ótima!';
        }

        if (somatoria > 0) {
            circleStyles.push(styles.circle);
            this.state.mensagem = 'Fique atento e observe, se houver um aumento dos sintomas, tanto físicos quanto psicológicos, procure auxílio de um profissional da Psicologia.';
        }

        if (somatoria > 10) {
            circleStyles.push(styles.circle);
            this.state.mensagem = 'Talvez seja importante que você procure o auxílio de um profissional da Psicologia para que ele possa, juntamente com você, avaliar estes sintomas que você está apresentando.';
        }

        if (somatoria > 30) {
            circleStyles.push(styles.circle);
            this.state.mensagem = ' Orientamos que procure o auxílio de um profissional, pois foram identificados sintomas significativos de ansiedade.';
        }

        return (      
            <View>
            <View><AlertExample /> 
            </View>
            <View style={styles.container}> 
                        
                <View style={circleStyles}>
                    <Image source={icon} style={styles.icon} resizeMode="contain" />
                </View>
                <Text style={styles.frase}>{this.state.mensagem}</Text>
                <View style={styles.ButtonSection}>
                    <ButtonFim
                        key='1'
                        text='Enviar resultado por e-mail'
                        onPress={this.handleEmail}
                    />
                </View>
            
            </View>
            </View>                    
        );
    }

    handleEmail = () => {
        const to = ['', ''] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['', ''], // string or array of email addresses
            bcc: '', // string or array of email addresses
            subject: 'Resultado do teste de ansiedade do AnsiedadeTest',
            body: this.state.mensagem
        }).catch(console.error)
    }
}

export default Resultado;
