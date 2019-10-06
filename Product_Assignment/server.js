const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
routes = require('./app/routes/appRoutes');

port = process.env.PORT || 3000;

const mysql = require('mysql');

//connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jq88esfx',
    database: 'products'
});

//connect to the database
mc.connect();

app.listen(port);

console.log('RESTful APP server has started on port: ' + port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);//registering the route