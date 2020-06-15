import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";

import Modal from 'react-native-modal';

import { Button, ButtonContainer } from "../components/Button";
import sintomaspsicologicos from "../data/sintomaspsicologicos";
import sintomasfisicos from "../data/sintomasfisicos";
import AlertExample from "../components/Alert";
import { ButtonVoltar } from "../components/Button";


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  },
  ButtonSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
});



class Quiz extends React.Component {
  state = {
    resposta1: 0,
    resposta2: 0,
    resposta3: 0,
    resposta4: 0,
    resposta5: 0,
    resposta6: 0,
    resposta7: 0,
    resposta8: 0,
    questao: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    pesoRespostaAnterior: 0,
    answerCorrect: false,
    isModalVisible: false,
    corModal: '#ffffff',
    mensagemModal: ''
  };


  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: 0 };

        if (state.totalCount > (state.questao + 1)) {
          nextState.questao = state.questao + 1;
        }

        nextState.resposta1 = state.resposta1;
        nextState.resposta2 = state.resposta2;
        nextState.resposta3 = state.resposta3;
        nextState.resposta4 = state.resposta4;
        nextState.resposta5 = state.resposta5;
        nextState.resposta6 = state.resposta6;
        nextState.resposta7 = state.resposta7;
        nextState.resposta8 = state.resposta8;

        if (correct == 1) {
          nextState.resposta1 = state.resposta1 + 1;
        }

        if (correct == 2) {
          nextState.resposta2 = state.resposta2 + 1;
        }

        if (correct == 3) {
          nextState.resposta3 = state.resposta3 + 1;
        }

        if (correct == 4) {
          nextState.resposta4 = state.resposta4 + 1;
        }

        if (correct == 5) {
          nextState.resposta5 = state.resposta5 + 1;
        }

        if (correct == 6) {
          nextState.resposta6 = state.resposta6 + 1;
        }

        if (correct == 7) {
          nextState.resposta7 = state.resposta7 + 1;
        }

        if (correct == 8) {
          nextState.resposta8 = state.resposta8 + 1;
        }

        nextState.answerCorrect = 0;
        nextState.pesoRespostaAnterior = correct

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 2000);
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {


      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex == 8) {
        this.openModal("#1E90FF", "Você está indo bem, vamos continuar animados!")
      }

      if (nextIndex == 18) {
        this.openModal("#F4A460", "Não desanime ainda, chegaremos ao final antes do que imagina!")
      }

      if (nextIndex == 24) {
        this.openModal("#D8BFD8", "Não desista agora, estamos quase acabando!")
      }

      if (nextIndex >= state.totalCount) {
        if (state.totalCount <= 18) {
          this.props.navigation.navigate("Quiz", {
            title: "Sintomas psicológicos",
            questions: sintomaspsicologicos,
            color: "#FF9C00",
          })
          this.state.totalCount = 28,
            this.state.questao = 0;
          this.state.activeQuestionIndex = 0;
          return {
            activeQuestionIndex: 0,
            answred: 0
          }
        } else {
          this.props.navigation.navigate("Resultado", {
            resposta1: this.state.resposta1,
            resposta2: this.state.resposta2,
            resposta3: this.state.resposta3,
            resposta4: this.state.resposta4,
            resposta5: this.state.resposta5,
            resposta6: this.state.resposta6,
            resposta7: this.state.resposta7,
            resposta8: this.state.resposta8,
          })
        }
      } else {
        return {
          activeQuestionIndex: nextIndex,
          answred: 0,
        }
      };
    });
  };

  backQuestion = () => {
    this.setState(state => {

      const nextIndex = state.activeQuestionIndex - 1;

      if (state.pesoRespostaAnterior == 1) {
        state.resposta1 = state.resposta1 - 1;
      }

      if (state.pesoRespostaAnterior == 2) {
        state.resposta2 = state.resposta2 - 1;
      }

      if (state.pesoRespostaAnterior == 3) {
        state.resposta3 = state.resposta3 - 1;
      }

      if (state.pesoRespostaAnterior == 4) {
        state.resposta4 = state.resposta4 - 1;
      }

      if (state.pesoRespostaAnterior == 5) {
        state.resposta5 = state.resposta5 - 1;
      }

      if (state.pesoRespostaAnterior == 6) {
        state.resposta6 = state.resposta6 - 1;
      }

      if (state.pesoRespostaAnterior == 7) {
        state.resposta7 = state.resposta7 - 1;
      }

      if (state.pesoRespostaAnterior == 8) {
        state.resposta8 = state.resposta8 - 1;
      }

      state.pesoRespostaAnterior = 0;

      state.questao = state.questao - 1;

      if (nextIndex < 0) {
        if (state.totalCount == 28) {
          this.props.navigation.navigate("Quiz", {
            title: "Sintomas físicos",
            questions: sintomasfisicos,
            color: "#FF9C00",
          })
          this.state.totalCount = 18,
            this.state.questao = 17;
          this.state.activeQuestionIndex = 17;
          return {
            activeQuestionIndex: 17,
            answred: 0
          }
        } else {
          this.props.navigation.navigate("QuizIndex")
        }
      } else {
        return {
          activeQuestionIndex: nextIndex,
          answred: 0
        }
      };
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false
    })
  }

  openModal = (cor, mensagem) => {
    this.setState({
      isModalVisible: true,
      corModal: cor,
      mensagemModal: mensagem
    })
  }

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const question = questions[this.state.activeQuestionIndex];
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("colorCorpo") }
        ]}
      >
        <AlertExample/>
        <StatusBar barStyle="light-content" />
        <Modal animationIn="slideInUp" animationOut="slideOutDown" onBackdropPress={() => this.closeModal()}
          onSwipeComplete={() => this.closeModal()} swipeDirection="right" isVisible={this.state.isModalVisible || false}
          style={{ backgroundColor: this.state.corModal, maxHeight: Dimensions.get('window').height }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 35 }}>{this.state.mensagemModal}</Text>
          </View>
        </Modal>
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>
            <ButtonContainer>
              {question.answers.map(answer => (
                <Button  
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.id)}
                />
              ))}
            </ButtonContainer>
          </View>
          <View style={styles.ButtonSection}>
            <ButtonVoltar
              key='1'
              onPress={() => this.backQuestion()}
            />
          </View>
          <Text style={styles.text}>
            {`${this.state.questao + 1}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default Quiz;
