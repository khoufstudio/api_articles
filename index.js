// API
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())

var routes = require('./routes')

app.use('/articles', (req, res, next) => {
    console.log("start")
    next()
})

//both index.js and things.js should be in same directory
app.use('/articles', routes)

app.listen(3000)