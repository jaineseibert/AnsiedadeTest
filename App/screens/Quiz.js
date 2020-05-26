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
    score: 0,
    questao: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    pesoRespostaAnterior: 0,
    answerCorrect: false,
    isModalVisible: false
  };


  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: 0 };

        if (state.totalCount > (state.questao + 1)) {
          nextState.questao = state.questao + 1;
        }
        nextState.score = state.score + correct;
        nextState.answerCorrect = 0;
        nextState.pesoRespostaAnterior = correct

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 1500);
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {


      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex == 4) {
        this.openModal()
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
            score: this.state.score
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
      state.score = state.score - state.pesoRespostaAnterior;
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

  openModal = () => {
    this.setState({
      isModalVisible: true
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
        <AlertExample />
        <StatusBar barStyle="light-content" />
        <Modal animationIn="slideInUp" animationOut="slideOutDown" onBackdropPress={() => this.closeModal()}
          onSwipeComplete={() => this.closeModal()} swipeDirection="right" isVisible={this.state.isModalVisible || false}
          style={{ backgroundColor: 'white', maxHeight: Dimensions.get('window').height}}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>This is the modal content for now!</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', position: 'absolute', bottom: 0 }}>
            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity style={{ backgroundColor: 'green', width: '50%' }}>
                <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>Ok</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: 'red', width: '50%' }} onPress={() => this.closeModal()}>
                <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
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
