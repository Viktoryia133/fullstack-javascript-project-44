import readLineSync from 'readline-sync';

const getEvenNumber = (num) => num % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gameEven = () => {
  const randomNumber = getRandomNumber(1, 100);
  const expectedAnswer = getEvenNumber(randomNumber) ? 'yes' : 'no';
  return [expectedAnswer, randomNumber];
};

const brainGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = gameEven();
    const answerUser = readLineSync.question(`Question: ${correctAnswer[1]}\nYour answer: `);

    if (answerUser === correctAnswer[0]) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer[0]}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainGame;
