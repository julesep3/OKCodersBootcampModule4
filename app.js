var express = require('express')
var app = express()
var port = 3000

let quotes = [
    "Fortune favors the brave.",
    "An eye for eye only ends up making the whole world blind.",
    "Where there is love, there is life",
    "The best love affairs are those we never had.",
    "Love is a better teacher than duty.",
    "Education is what remains after one has forgotten what one has learned in school.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
]

app.use('/', express.static('files'))

app.get('/', function(req, res){
    res.send(quotes)
})

app.listen(port, function() {
    console.log("Express running on port" + port)
})