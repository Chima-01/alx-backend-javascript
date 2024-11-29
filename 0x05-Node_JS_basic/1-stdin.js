const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const data = readline.createInterface({ input, output });
data.question('Welcome to Holberton School, what is your name\n', (answer) => {
  console.log(`Your name is: ${answer}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  data.close();
});
