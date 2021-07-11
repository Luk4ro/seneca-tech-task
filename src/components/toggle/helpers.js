import { toggleBorderSize, toggleHeight, borderRadius } from "./styles"

export const areAnswersStacked = (toggleRef)  => {
  const nonStackedHeight = toggleHeight + 2 * toggleBorderSize
  return toggleRef.current.getBoundingClientRect().height > nonStackedHeight
}

export const getXTranslation = ({ selectedAnswer, answersAreStacked }) => {
  if (answersAreStacked) {
    return 0
  } else {
    if (selectedAnswer === 0) return 0
    return '100%'
  }
}

export const getYTranslation = ({ selectedAnswer, answersAreStacked }) => {
  if (answersAreStacked) {
    if (selectedAnswer === 0) return 0
    return `${toggleHeight}px`
  } else {
    return 0
  }
}

export const getTopBorderRadius = ({ selectedAnswer, answersAreStacked }) => {
  if (!answersAreStacked) return borderRadius
  if (selectedAnswer === 0) return borderRadius
  return 0
}

export const getBottomBorderRadius = ({ selectedAnswer, answersAreStacked }) => {
  if (!answersAreStacked) return borderRadius
  if (selectedAnswer === 0) return 0
  return borderRadius
}