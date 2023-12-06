const mongoose =require("mongoose");
const Schema =mongoose.Schema ;


const vendorSchema = new Schema({

    
    firstName :{ type: String},
    lasttName :{ type: String},
    email :{ type: String, required:true},
    password:{ type: String, required:true},
    adress:{ type: String},
    phone:{ type: String},
    Age:{ type: Number},
    sex:{ type: String},
    national:{ type: String},
    Access:{ type: String},
   
});


module.exports=mongoose.model('vendor',vendorSchema);