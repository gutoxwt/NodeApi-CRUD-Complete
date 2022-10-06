const express = require('express');
const router = require('./router')
const app = express();

app.use(express.json()); // Faz com que a API consiga trabalhar com dados json
app.use(router);

module.exports = app;