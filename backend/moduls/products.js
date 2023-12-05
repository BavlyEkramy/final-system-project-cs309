const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        id: {type : Number },
        type: { type: String },
        description: { type: String },
        model: { type: String },
        price: { type: String },
        stock: { type: Number },
        images: { type: Array },
        stars: { type: Number},
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Products' , productsSchema);