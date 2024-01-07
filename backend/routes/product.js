const express = require('express');
const router = express.Router();
const {
    createProduct,
    listProduct,
    readProduct,
    removeProduct,
    updataProduct
} = require('../controllers/product');


router.post('/product', createProduct);
router.get('/product', listProduct);
router.get('/product/:id', readProduct);
router.delete('/product/:id', removeProduct);
router.put('/product/:id', updataProduct);

module.exports = router;

