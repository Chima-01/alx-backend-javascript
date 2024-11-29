const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const data = readline.createInterface({ input, output });
data.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  output.write(`Your name is: ${answer}\n`);
  if (!input.isTTY) {
    output.write('This important software is now closing\n');
  }
  data.close();
});
