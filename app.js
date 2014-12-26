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

app.get('/resume', function (req, res) {
	res.render('resume.html');
});


app.listen(process.env.PORT || 3000);