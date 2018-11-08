var express = require('express')
var router = express.Router()
var todo = require('./controller')

router.get('/', function(req, res){
   res.send('GET route on things.')
})

router.get('/read/', function(req, res){
//    res.send('GET route on things.')
    todo.read(req, res);
})

router.get('/read/:id', function(req, res){
//    res.send('GET route on things.')
    todo.read(req, res, req.params.id);
})

router.post('/create', function(req, res){
   todo.create(req, res);
})

router.patch('/update/:id', function(req, res){
   todo.update(req, res);
})

router.delete('/delete/:id', function(req, res){
   todo.delete(req, res);
})


//export this router to use in our index.js
module.exports = router