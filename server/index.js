var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/index');
var path = require("path");

var cookieParser = require('cookie-parser')
var app = express();
app.use(cookieParser())
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.set('port', process.env.PORT || 8000);

app.use('/api/', router);

app.use('/', express.static(path.join(__dirname, '../build')));



app.get("*", function(req, res) {
  res.sendFile(__dirname + '/../build/index.html')
})

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
