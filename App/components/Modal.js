import React from "react";
import { View, StyleSheet, Modal, Text, Button } from "react-native";

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00ff00',
        padding: 100,
    },
    text: {
        color: '#000000',
        marginTop: 10,
    },
});



export const ModalAnimar = ({ questao, mensagem }) => {
    visivel = true;

    fechar = setvisivel => {
       visivel: setvisivel;
    };

    if (questao == 4) {
        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={visivel}
                onRequestClose={() => this.fechar(false)}
            >

                <View style={styles.modal}>
                    <Text style={styles.text}>MODAL ESTÁ ABERTO!</Text>
                    <Button
                        title="Clique Para Fechar Modal"
                        onPress={() => this.fechar(false)}
                    />
                </View>
            </Modal>
        );
    } else {
        return (null);
    }
};