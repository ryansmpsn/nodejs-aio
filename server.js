const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

console.log('Hello...');

fs.writeFile(
  path.join(__dirname, 'files', 'reply.txt'),
  'Nice to meet you.',
  (err) => {
    if (err) {
      throw err;
    }

    fs.appendFile(
      path.join(__dirname, 'files', 'reply.txt'),
      '\nAppending to file.',
      (err) => {
        if (err) {
          throw err;
        }

        fs.appendFile(
          path.join(__dirname, 'files', 'reply.txt'),
          '\nWe are again appending to the file.',
          (err) => {
            if (err) {
              throw err;
            }
          }
        );
      }
    );
  }
);

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error:', err);
  process.exit(1); // Exit the process with an error code
});
