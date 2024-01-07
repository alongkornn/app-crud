const modelProduct = require('../models/product');

exports.createProduct = async (req, res) => {
    try {
        const product = await modelProduct(req.body).save();
        res.json({ message: "Create success", data: product });

    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
}

exports.listProduct = async (req, res) => {
    try {
        const product = await modelProduct.find({}).exec();
        res.send(product);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
}

exports.readProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await modelProduct.findOne({ _id: id }).exec();
        res.send(product);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.removeProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await modelProduct.findOneAndDelete({ _id: id }).exec();
        res.json({ message: "Delete success", data: product });
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
}

exports.updataProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await modelProduct.findOneAndUpdate({ _id: id }, req.body).exec();
        res.json({ message: "Updata Success", oldData: product });
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
}