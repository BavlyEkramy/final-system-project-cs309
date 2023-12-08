const mongoose =require("mongoose");
const Schema =mongoose.Schema ;

const cardSchema = new Schema({

    userId :{ type: String, required:true},
    productId :{ type: String, required:true},
   
});

module.exports=mongoose.model('Cards',cardSchema);