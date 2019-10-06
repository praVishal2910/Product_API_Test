'use strict';
module.exports = function(app){
    var products = require('../controller/appController');

    app.route('/products') // general operations
        .get(products.list_all_products)
        .post(products.create_products);

    app.route('/products/:id') // operations on db by Id
        .get(products.read_products_by_id)
        .put(products.update_products)
        .delete(products.delete_products)
};