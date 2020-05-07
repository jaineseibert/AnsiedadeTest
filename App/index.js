import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import Resultado from "./screens/Resultado";

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Bem-vindo ao AnsiedadeTest!"
      
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      },
      headerLeft: null
    })
  },
  Resultado: {
    screen: Resultado,
    navigationOptions: ({ navigation }) => ({
      score: navigation.getParam("score")
    })
  }
});

export default createAppContainer(MainStack);
