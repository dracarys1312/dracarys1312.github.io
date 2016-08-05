var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product.js');

module.exports = router;
// create a new product
router.post('/create', function(req, res, next) {
  Product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
