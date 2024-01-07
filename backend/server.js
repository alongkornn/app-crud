const express = require('express');
const cors = require('cors');
const app = express();
const { readdirSync, } = require('fs');
const connectDB = require('./config/db');

app.use(express.json());
app.use(cors({
    origin: ["https://app-crud-fronend.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
connectDB();

readdirSync('./routes').map((item) => {
    app.use('/', require('./routes/' + item));
})


app.listen(8080, () => {
    console.log("Server is running.....");
})