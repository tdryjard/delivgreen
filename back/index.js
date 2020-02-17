const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const cors = require('cors');

dotenv.config();

const app = express();

const whitelist = [
  `http://localhost:3000`,
  `http://10.0.28.35:3000`,
  `http://10.0.28.19:3000`,
  `http://10.0.60.77:3000`
];

app.use(
  cors({
    origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const api = require('./routes');

app.use('/api', api);

app.listen(port);
