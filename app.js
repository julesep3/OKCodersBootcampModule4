var express = require('express')
var app = express()
var port = 3000

app.use('/', express.static('files'))

app.get('/', function(req, res){
    res.send("yo wassump?")
})

app.listen(port, function() {
    console.log("Express running on port" + port)
})