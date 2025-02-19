const fsPromises = require('fs').promises;
const path = require('path');

// fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, 'files', 'reply.txt'),
//   'Nice to meet you.',
//   (err) => {
//     if (err) {
//       throw err;
//     }

//     fs.appendFile(
//       path.join(__dirname, 'files', 'reply.txt'),
//       '\nAppending to file.',
//       (err) => {
//         if (err) {
//           throw err;
//         }

//         fs.appendFile(
//           path.join(__dirname, 'files', 'reply.txt'),
//           '\nWe are again appending to the file.',
//           (err) => {
//             if (err) {
//               throw err;
//             }
//           }
//         );
//       }
//     );
//   }
// );

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'lorem.txt'),
      'utf8'
    );

    console.log(data);

    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'writeFile.txt'),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'writeFile.txt'),
      '\n\nNice to meet you.'
    );

    await fsPromises.rename(
      path.join(__dirname, 'files', 'writeFile.txt'),
      path.join(__dirname, 'files', 'renamedFile.txt')
    );

    console.log('File renamed successfully');
  } catch (err) {
    console.error(err);
  }
};

fileOps();

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error:', err);
  process.exit(1); // Exit the process with an error code
});
