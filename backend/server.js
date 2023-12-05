// Require Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

// Require Moduls
const Products = require("./moduls/products");
const Users = require("./moduls/users");
const Cards = require("./moduls/basket");
const Buy = require("./moduls/buy");
const product_data = require("./products_data").default;
// Create server object
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended : true }));
server.use(cors());

//-------------------------------------------------------------

// Home Requestes

// 1 => return all products
server.get('/' , cors() , async (req , res)=>{
    
});

// 2 => return products by type

server.get('/getbytype' , cors() , async (req , res)=>{

});

// 3 => return products by model

server.get('/search' , cors() , async (req , res)=>{

});


//-------------------------------------------------------------------------

// Card Requestes

// 1 => return all products in card's user 

server.get('/cards' , cors() , async (req , res)=>{
    try{
        const cards = await Cards.find({});
        if(cards == null){
            res.status(400).json("Empity");
        }else{
            res.status(200).json(cards);
        }
    }catch(error){
        res.status(400).json(error);
        console.log(error);
    }
});

// 2 => delete product from card 

server.delete('/deletecard' , cors() , async (req , res)=>{
    const cardid = req.body.id;
    try {
        const deletecard = await Cards.findByIdAndDelete(cardid);
        if(deletecard){
            res.status(200).json(deletecard);
        }else{
            res.status(404).json("Not Found");
        }
    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
});

// 3 => add product to card's user

server.post('/addcard' , cors() , async (req , res)=>{
    const card = req.body;
    try {
        const newcard = await new Cards(card);
        await newcard.save();
        res.status(200).json("Add To Card");  
    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
});

//-------------------------------------------------------------------------

// Buy Requestes

// 1 => get all products which user buy

server.get('/buy' , cors() , async (req , res)=>{
    try{
        const buys = await Buy.find({});
        if(buys == null){
            res.status(400).json("Empity");
        }else{
            res.status(200).json(buys);
        }
    }catch(error){
        res.status(400).json(error);
        console.log(error);
    }
})

// 2 => post product to buy

server.post('/buy' , cors() , async (req , res)=>{
    const buy = req.body;
    try {
        const newbuy = await new Buy(buy);
        await newbuy.save();
        res.status(200).json("Add To Card");  
    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
});

//-------------------------------------------------------------------------

// Login Requestes

// 1 => chick if user email existe

server.post('/login' , cors() , async (req , res)=>{
    const body = req.body;
    try {
        const finduser = await Users.findOne({email : body.email});
        if(finduser == null){
            res.json("Email Dose Not Exist");
        }else{
            const checkPassword  = await bcrypt.compareSync(body.password , finduser.password)
            if(checkPassword){
                res.status(200).json(finduser);
            }else{
                res.json("Email or Password is not correct");
            }      
    }
    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
})

// 2 => Sign in new user

server.post('/signup' , cors() , async(req , res)=>{
        const newuser = req.body;
        try {
        const finduser = await Users.findOne({email:newuser.email});
        
        if(finduser != null){
            res.json("Email is Oready Exist");
        }else{
           const user = await new Users(newuser);
           user.password = await bcrypt.hash(user.password , 10);
           await user.save();
           res.status(200).json(user);
        } 
        }catch (error) {
            res.status(400).json(error);
            console.log(error);
        }
})

//--------------------------------------------------------------------------

//listen on Mongodb 
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017')
.then(()=>{
    console.log('connected to MongoDB');
    // listen on specific port 
    server.listen(8000, () => console.log('server started on port 8000'));
}).catch((error)=>{
    console.log('cant connect to mongodb '+error)
})