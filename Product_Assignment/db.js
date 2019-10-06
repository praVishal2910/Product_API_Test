'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host        : 'localhost',
    user        :  'root',
    password    :   'admin@123456*',
    database    :   'products'
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection;