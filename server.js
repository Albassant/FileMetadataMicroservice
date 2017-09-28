// server.js
// where your node app starts

// init project
const express = require('express');
const routes = require('./routes/index.js');
const app = express();

app.use(express.static('public'));

app.use('/', routes);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
