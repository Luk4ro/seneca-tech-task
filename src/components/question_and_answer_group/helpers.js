export const initialiseSelectedAnswers = (arrLength) => {
  return Array.from({ length: arrLength }, () => {
    if (Math.random() > 0.5) return 1
    return 0
  })
}

export const arrayEquals = (array1, array2) => {
  return array1.every((val, index) => val === array2[index])
}

export const calculateHue = (correctAnswers, selectedAnswers) => {
  const maxHue = 170
  const huePerCorrectAnswer = Math.floor(maxHue / correctAnswers.length)
  
  let numberOfCorrectAnswers = 0
  selectedAnswers.forEach((selectedAnswer, index) => {
    if (selectedAnswer === correctAnswers[index]) numberOfCorrectAnswers++
  })
  
  return huePerCorrectAnswer * numberOfCorrectAnswers
}