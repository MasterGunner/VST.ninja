var express = require('express');

var app = express();

app.use(express.static('./')); //Serve current folder

//Set Default Page.
app.get('/', function (req, res) {
    res.sendFile('home.html', { root: __dirname } );
});

app.listen(80)
console.log('Server running at http://127.0.0.1:80');