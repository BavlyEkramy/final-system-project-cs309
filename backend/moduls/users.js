const mongoose =require("mongoose");
const Schema =mongoose.Schema ;


const userSchema = new Schema({

    
    firstName :{ type: String, required:true},
    lasttName :{ type: String, required:true},
    Email :{ type: String, required:true},
    Password:{ type: String, required:true},
    Adress:{ type: String, required:true},
    Phone:{ type: String, required:true},
    Date:{ type: Number, required:true},
    Sex:{ type: String, required:true},
    National:{ type: String, required:true},
   
});


module.exports=mongoose.model('User',userSchema);