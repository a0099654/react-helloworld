var express = require('express');
var path = require('path');
var app = express();

var routes = require('./routes/index');

app.use('/', routes);
app.set('port', process.env.PORT || 8080);

if (process.argv[2] == "dev"){
    app.use(express.static(path.join(__dirname)));
}

//View engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

var server = app.listen(app.get('port'), function(){
    console.log("app started");
    console.log("Localhost:8080 started");
})   