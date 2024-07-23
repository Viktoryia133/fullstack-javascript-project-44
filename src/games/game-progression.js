import brainGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getArrNumbers = (first, step, lenght, hidden) => {
  const arrNumber = [];
  for (let i = 0; i < lenght; i += 1) {
    if (i === hidden) {
      arrNumber.push('..');
    } else {
      arrNumber.push(first + i * step);
    }
  }
  return arrNumber.join(' ');
};

const gameProgression = () => {
  const firstNumber = getRandomNumber(1, 6);
  const stepNumber = getRandomNumber(1, 5);
  const lenghtNumber = getRandomNumber(5, 11);
  const hiddenNumber = getRandomNumber(1, lenghtNumber);
  const questionArr = getArrNumbers(firstNumber, stepNumber, lenghtNumber, hiddenNumber);
  const result = {
    question: `${questionArr}`,
    answer: String(firstNumber + stepNumber * hiddenNumber),
  };

  return result;
};
const startGameProgression = () => {
  brainGame('What number is missing in the progression?', gameProgression);
};
export default startGameProgression;
