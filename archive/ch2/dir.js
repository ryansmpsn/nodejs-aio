const fs = require('fs');
const path = require('path');

if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;

    console.log('Directory created');
  });
}

if (fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) throw err;

    console.log('Directory removed');
  });
}
