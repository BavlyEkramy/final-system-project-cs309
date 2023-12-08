const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        type: { type: String, required: true },
        description: { type: String, required: true },
        model: { type: String, required: true },
        price: { type: String, required: true },
        stock: { type: Number, required: true },
        images: { type: Array, required: true },
        stars: { type: Number, required: true },
        
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Products' , productsSchema);