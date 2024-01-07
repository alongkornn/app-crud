const mogoose = require('mongoose');

const connectDB = async () => {
    try {
        await mogoose.connect('mongodb+srv://alongkornp5363:uior1230@crud.pytqcbc.mongodb.net/');
        console.log("Database connected......");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;