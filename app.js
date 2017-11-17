var express = require('express');
var app = express();

var port = process.env.PORT || 3500;

app.get('/' ,  function(req , res){
	res.sendFile(__dirname + '/display.html');
});


app.listen(port);
console.log("app is running @ 3500");