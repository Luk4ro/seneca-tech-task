import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Toggle from '../toggle'
import * as S from './styles'
import {
  initialiseSelectedAnswers,
  arrayEquals,
  calculateHue
} from './helpers'

const QuestionAndAnswerGroup = ({ question, correctAnswers, possibleAnswers }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(initialiseSelectedAnswers(correctAnswers.length))
  const [disabled, setDisabled] = useState(arrayEquals(selectedAnswers, correctAnswers))
  
  useEffect(() => {
    setDisabled(arrayEquals(selectedAnswers, correctAnswers))
  }, [selectedAnswers, correctAnswers])

  const handleClick = (answerIndex) => {
    if (!disabled) {
      const newSelectedAnswers = [...selectedAnswers]
      newSelectedAnswers[answerIndex] ^= 1
      setSelectedAnswers(newSelectedAnswers)
    }
  }

  const hue = calculateHue(correctAnswers, selectedAnswers)

  return (
    <S.Container hue={hue}>
      {question}
      {
        selectedAnswers.map((_, index) => <Toggle
            key={index}
            answers={possibleAnswers[index]}
            selectedAnswer={selectedAnswers[index]}
            onClick={handleClick.bind(this, index)}
            hue={hue}
          />
        )
      }
      {disabled ? 'The answer is Correct!' : 'The answer is incorrect'}
    </S.Container>
  )
}

QuestionAndAnswerGroup.propTypes = {
  question: PropTypes.string.isRequired,
  correctAnswers: PropTypes.arrayOf(PropTypes.number).isRequired,
  possibleAnswers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
}

export default QuestionAndAnswerGroup