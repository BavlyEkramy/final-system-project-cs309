const mongoose =require("mongoose");
const Schema =mongoose.Schema ;


const userSchema = new Schema({

    type:{type : String},
    firstName :{ type: String},
    lasttName :{ type: String},
    email :{ type: String, required:true},
    password:{ type: String, required:true},
    adress:{ type: String},
    phone:{ type: String},
    Age:{ type: Date},
    sex:{ type: String},
    national:{ type: String},

});


module.exports=mongoose.model('User',userSchema);