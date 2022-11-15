const express = require('express');
var mysql = require('mysql');   
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('../client/whitesoftproject/src/App.tsx'))

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.sendFile('App.tsx', {root: __dirname})
});

var connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'whitesoft'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('YEAHHH conected');
})

app.post('/submit', function (req,res) {

    var sql = "insert into users values(null,'"+ req.body.name+"', '"+req.body.email+"',"+req.body.country+")"
    connection.query(sql, function (err) {
        if (err) throw err
        res.render('index', {title: 'Data Saved',
        message: 'Data Saved Succesfully'})
    })

    connection.end();
    
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`http://localhost:${port}`)
});