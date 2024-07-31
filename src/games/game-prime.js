import brainGame from '../index.js';

const getRandomNumber = (num) => Math.floor(Math.random() * num);
const getPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const gamePrime = () => {
  const primeNumber = getRandomNumber(100);
  const correctAnswer = getPrimeNumber(primeNumber) ? 'yes' : 'no';
  const result = {
    answer: `${correctAnswer}`,
    question: `${primeNumber}`,
  };
  return result;
};
const startGamePrime = () => {
  brainGame('Answer "yes" if given number is prime. Otherwise answer "no".', gamePrime);
};
export default startGamePrime;
