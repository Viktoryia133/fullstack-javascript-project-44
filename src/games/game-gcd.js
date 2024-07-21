import brainGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};
const gameGcd = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const result = {
    question: `${num1} ${num2}`,
    answer: String(getGcd(num1, num2)),
  };
  return result;
};
const startGameGcd = () => {
  brainGame('Find the greatest common divisor of given numbers.', gameGcd);
};
export default startGameGcd;
