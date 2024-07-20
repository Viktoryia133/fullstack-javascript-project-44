import readLineSync from 'readline-sync';

const brainGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = getGameData();
    const answerUser = readLineSync.question(`Question: ${correctAnswer.question}\nYour answer: `);

    if (answerUser === correctAnswer.answer) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer.answer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default brainGame;
