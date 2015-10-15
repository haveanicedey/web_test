var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.set('views', __dirname + '/views/pages');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

/*******************************************************************************/

app.get('/', function(req, res) {
	res.render('index.ejs');
});

/*******************************************************************************/

console.log('Listening on 8888');
app.listen(8888);