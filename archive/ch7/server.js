const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger, logEvents } = require('./middleware/logEvents');
const PORT = process.env.PORT || 3500;
const errorHandler = require('./middleware/errorHandler');

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
const whitelist = ['https://www.yoursite.com', 'http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join('views', 'index.html'), { root: __dirname });
});

app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join('views', 'new-page.html'), { root: __dirname });
});

app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page.html'); // 302 temporary redirect response by default
});

// Route handlers
app.get(
  '/hello(.html)?',
  (req, res, next) => {
    console.log('attempted to load hello.html');
    next();
  },
  (req, res) => {
    res.send('Hello World!');
  }
);

app.all('/*', (req, res) => {
  res.status(404);

  if (req.accepts('html')) {
    res.sendFile(path.join('views', '404.html'), { root: __dirname });
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
