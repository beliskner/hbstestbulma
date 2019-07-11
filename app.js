const {getRandomList} = require('./js/getRandomList')
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use(express.static('mybulma'))
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/leuk', function (req, res) {
    let peopleList = getRandomList();
    res.render('leuk', {people : peopleList});
});

app.listen(3000);
