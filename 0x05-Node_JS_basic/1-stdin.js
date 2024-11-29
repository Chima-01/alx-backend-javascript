const { stdin: input, stdout: output } = require('process');

output.write('Welcome to Holberton School, what is your name?\n');

input.on('data', (data) => {
  output.write(`Your name is: ${data}`);
});

input.on('end', () => {
  output.write('This important software is now closing\n');
});
