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

// 1 => return all products for card's user 

server.get('/cards' , cors() , async (req , res)=>{

});

// 2 => delete product from card 

server.delete('/deletecard' , cors() , async (req , res)=>{

});

// 3 => add product to card's user

server.post('/addcard' , cors() , async (req , res)=>{

});



//-------------------------------------------------------------------------

// Buy Requestes

// 1 => get all products which user buy

server.get('/buy' , cors() , async (req , res)=>{

})

// 2 => post product to buy

server.post('/buy' , cors() , async (req , res)=>{

});

//-------------------------------------------------------------------------

// Login Requestes

// 1 => chick if user email existe

server.get('/login' , cors() , async (req , res)=>{

})

// 2 => Sign in new user

server.post('/signin' , cors() , async(req , res)=>{

})

//--------------------------------------------------------------------------

//listen on Mongodb 
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27123')
.then(()=>{
    console.log('connected to MongoDB');
    // listen on specific port 
    server.listen(8000, () => console.log('server started on port 8000'));
}).catch((error)=>{
    console.log('cant connect to mongodb '+error)
})