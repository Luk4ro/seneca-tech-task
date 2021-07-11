import { useState, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import { areAnswersStacked } from './helpers'

const Toggle = ({ answers, selectedAnswer, onClick, hue }) => {
  const toggleRef = useRef(null)
  const [answersAreStacked, setAnswersAreStacked] = useState(false)

  useLayoutEffect(() => {
    if (areAnswersStacked(toggleRef)) setAnswersAreStacked(true)
  }, [])

  return (
    <S.Toggle
      ref={toggleRef}
      onClick={onClick}
    >
      <S.Notch
        answersAreStacked={answersAreStacked}
        selectedAnswer={selectedAnswer}
        hue={hue}
      />
      <S.Answer hue={hue}>{answers[0]}</S.Answer>
      <S.Answer hue={hue}>{answers[1]}</S.Answer>
    </S.Toggle>
  )
}

Toggle.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedAnswer: PropTypes.oneOf([0, 1]).isRequired,
  onClick: PropTypes.func.isRequired,
  hue: PropTypes.number.isRequired
}

export default Toggle