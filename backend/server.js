const products = require("./models/products");
const express = require("express");
const mongoose = require("mongoose");

const server = express();

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then(() => {
        console.log("mongodb is run");
        server.listen(8000, () => console.log("server is run "));
    }).catch(err => console.log(err));