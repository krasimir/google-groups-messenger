const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

const home = require('./pages/home');
const message = require('./pages/message');

app.use(express.static(__dirname + '/public'));

app.get('/message', message);
app.get('/', home);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});