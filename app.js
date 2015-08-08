var express = require('express');

var app = express();
app.engine('.html', require('ejs').__express);
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/img/'));
app.use(express.static(__dirname + '/font/'));
app.set('views', __dirname + '/');

app.get('/', function (req, res) {
	res.render('index.html');
});

app.get('/portfolio', function (req, res) {
	res.render('portfolio.html');
});

app.get('/contact', function (req, res) {
	res.render('contact.html');
});

app.get('/resume', function (req, res) {
	res.render('resume.html');
});

app.get('/churchill', function (req, res) {
	res.render('churchill.html');
});


app.listen(process.env.PORT || 3000);