var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var users = require('./routes/users')
var ticket = require('./routes/ticket')

app.get('/', users);
app.get('/ticket', ticket);
app.post('/submit_ticket', ticket);

app.listen(3000, () => console.log('server run listening on port 3000'));