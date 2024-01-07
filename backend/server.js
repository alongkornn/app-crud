const express = require('express');
const cors = require('cors');
const app = express();
const { readdirSync, } = require('fs');
const connectDB = require('./config/db');

app.use(express.json());
app.use(cors());
connectDB();

readdirSync('./routes').map((item) => {
    app.use('/', require('./routes/' + item));
})


app.listen(8080, () => {
    console.log("Server is running.....");
})