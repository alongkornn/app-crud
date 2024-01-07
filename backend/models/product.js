const mogoose = require('mongoose');

const productSchema = mogoose.Schema({
    name: {
        type: String
    },
    detail: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = mogoose.model('products', productSchema);