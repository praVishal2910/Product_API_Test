'use strict';
var sql = require('../../db.js');

var Products = function(products){
    this.id = products.id;
    this.name = products.name;
    this.price = products.price;
    this.description = products.description;
};

Products.createProducts = function (newProducts, result) {
    sql.query("INSERT INTO products SET ?", newProducts, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Products.getProductsById = function (id, result) {
    sql.query("SELECT * FROM products WHERE id = ?", id, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res);
        }
    });
};

Products.getAllProducts = function (result){
    sql.query("SELECT * FROM products", function (err, res) {
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('product: ', res);
            result(null, res);
        }
    });
};

Products.updateProduct = function(id, products, result){
    sql.query("UPDATE products SET ? WHERE id = ?", [products, id], function(err, res){
        if(err) {
            console.log("error ", err);
            result(null, err);
        }
        else{
            console.log("Update Successful");
            result(null, res)
        }
    });
};

Products.deleteProduct = function(id, result){
    sql.query("DELETE FROM products WHERE id = ?", [id], function(err, res){
        if(err) {
            console.log("error ", err);
            result(null, err);
        }
        else{
            console.log("Delete Successful");
            result(null, res)
        }
    });
};

module.exports = Products;