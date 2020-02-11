const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors({ origin: `http://localhost:3000` }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const api = require('./routes');

app.use('/api', api);

app.listen(port);
