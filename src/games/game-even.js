import brainGame from '../index.js';

const getEvenNumber = (num) => num % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gameEven = () => {
  const randomNumber = getRandomNumber(1, 100);
  const expectedAnswer = getEvenNumber(randomNumber) ? 'yes' : 'no';
  const result = {
    answer: expectedAnswer,
    question: randomNumber,
  };
  return result;
};
const startGameEven = () => {
  brainGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    gameEven,
  );
};

export default startGameEven;
