import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import { Button, ButtonContainer } from "../components/Button";
import sintomaspsicologicos from "../data/sintomaspsicologicos";
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
  };

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: 0 };

        nextState.questao = state.questao + 1;
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

      if (nextIndex >= state.totalCount) {
        if (state.totalCount <= 18) {
          this.props.navigation.navigate("Quiz", {
            title: "Sintomas psicolgicos",
            questions: sintomaspsicologicos,
            color: "orange",
          })
          this.state.totalCount = 28,
            this.state.questao = 1;
          this.state.activeQuestionIndex = 1;
          return {
            activeQuestionIndex: 1,
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
          answred: 0
        }
      };
    });
  };

  backQuestion = () => {
    this.setState(state => {

      const nextIndex = state.activeQuestionIndex - 1;
      state.pesoRespostaAnterior = 0;

        return {
          activeQuestionIndex: nextIndex,
          answred: 0

      };
    });
  };


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
            {`${this.state.questao}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default Quiz;
