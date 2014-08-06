
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/jim:name', function(req, res){
  res.send('<html><head><link rel="stylesheet" type="text/css" href="style.css"></head><body>' +
'<h1>Hello ' + req.params.name + '</h1><p><a href="http://www.angularjs.org">' +
'<img src="google.png" alt="Google"></a></p></a>' +
'</body></html>');
});

app.get('/*', function(req, res) {
 res.send('<html><head><link rel="stylesheet" type="text/css" href="style.css"></head></body>' + 
 '<h1>Looks like you found my sexy 404 page</h1>');
});


app.listen(3000);