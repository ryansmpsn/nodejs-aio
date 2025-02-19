const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  console.log('we should be loggin this', logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }
    if (!fs.existsSync(path.join(__dirname, 'logs', 'eventLog.txt'))) {
      await fsPromises.writeFile(
        path.join(__dirname, 'logs', 'eventLog.txt'),
        logItem,
        { flag: 'a' }
      );
    }

    await fsPromises.appendFile(
      path.join(__dirname, 'logs', 'eventLog.txt'),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
