import QuestionAndAnswerGroup from './components/question_and_answer_group'
import { AppContainer, QuestionAndAnswerGroupContainer } from './styles.js'

const data = {
  question: 'Which of the following are sports?',
  correctAnswers: [0, 1, 1, 0, 0],
  possibleAnswers: [
    ['Football', 'Cheese'],
    ['Flower', 'Rugby'],
    ['Something with a really long name', 'Swimming'],
    ['Cricket', 'Chocolate'],
    ['Correct answer', 'Incorrect answer']
  ]
}

const App = () => {
  return (
    <AppContainer>
      <QuestionAndAnswerGroupContainer>
        <QuestionAndAnswerGroup
          question={data.question}
          correctAnswers={data.correctAnswers}
          possibleAnswers={data.possibleAnswers}
        />
      </QuestionAndAnswerGroupContainer>
    </AppContainer>
  )
};

export default App;
