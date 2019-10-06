'use strict';
var Products = require('../model/appModel.js');

exports.list_all_products = function(req, res){
    Products.getAllProducts(function(err, products){
        if(err){
            res.send(err);
        }
        else{
            console.log('res', products);
            res.send(products);
        }
    });
};

exports.create_products = function(req, res){
    var new_product = new Products(req.body);
    //handles null error
    if(!new_product){
        res.status(400).send({error:true, message:'Create Product Error: Please provide product details'})
    }
    else{
        Products.createProducts(new_product, function(err, products){
            if(err){
                res.send(err);
            }
            else{
                console.log('res', products);
                res.json(products);
            }
        });
    }
};

exports.read_products_by_id = function(req, res) {
    // if no product id is received in the request
    if(!req.query && !req.query.id){
        res.status(400).send({error:true, message:'Get Products By Id Error: No product if provided.'})
    }
    else{
        Products.getProductsById(req.query.id, function(err, product){
            if(err){
                res.send(err);
            }
            else{
                res.json(product);
            }
        });
    }
};

exports.update_products = function(req, res){
    // if no product id is received in the request
    if(!req.query && !req.query.id){
        res.status(400).send({error:true, message:'Update Error: No product if provided.'})
    }
    else{
        Products.updateProduct(req.query.id, req.body, function(err, product){
            if(err){
                res.send(err);
            }
            else{
                res.json(product);
            }
        });
    }
};

exports.delete_products = function(req, res){
    // if no product id is received in the request
    if(!req.query && !req.query.id){
        res.status(400).send({error:true, message:'Get Products By Id Error: No product if provided.'})
    }
    else{
        Products.deleteProduct(req.query.id, function(err, product){
            if(err){
                res.send(err);
            }
            else{
                res.json(product);
            }
        });
    }
};