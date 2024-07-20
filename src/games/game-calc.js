import brainGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gameCalc = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const randomOperator = getRandomNumber(0, 3);
  const operator = ['+', '-', '*'];
  let expectedAnswer;
  switch (randomOperator) {
    case 0: expectedAnswer = num1 + num2;
      break;
    case 1: expectedAnswer = num1 - num2;
      break;
    case 2: expectedAnswer = num1 * num2;
      break;
    default: expectedAnswer = 'Неверно';
  }
  const result = {
    answer: String(expectedAnswer),
    question: `${num1} ${operator[randomOperator]} ${num2}`,
  };
  return result;
};
const startGameCalc = () => {
  brainGame(
    'What is the result of the expression?',
    gameCalc,

  );
};
export default startGameCalc;
