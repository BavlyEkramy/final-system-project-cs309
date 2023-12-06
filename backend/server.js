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
const Vendor =require("./moduls/vendor");
// Create server object
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended : true }));
server.use(cors());

const products = [
    {
        "type": "screen",
        "description": "Details\n\
                        Screen Size 22 Inche\n\
                        Display Resolution Maximum 1920 x 1080 Pixels\n\
                        Brand Name SAMSUNG\n\
                        Special Features Curved\n\
                        Refresh Rate 75 Hz\n\
                        Connectivity Technology VGA\n\
                        Display Type LED\n\
                        Item Dimensions D x W x H 48.9D x 23.2W x 39.7H centimeters\n\
                        Response Time 4 Milliseconds\n\
                        Color Black",
        "model": "SAMSUNG LED MONITOR",
        "price": "$330",
        "stock": "10",
        "images": ["./prouducts_photo/Screens/SAMSUNG_LED_MONITOR/1.png" ,
                   "./prouducts_photo/Screens/SAMSUNG_LED_MONITOR/2.png" ,
                   "./prouducts_photo/Screens/SAMSUNG_LED_MONITOR/3.png" ,
                   "./prouducts_photo/Screens/SAMSUNG_LED_MONITOR/4.png" ,
                   "./prouducts_photo/Screens/SAMSUNG_LED_MONITOR/5.png" ],
        "stars": "4.2",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        Acer Aspire 5 A515-45G-R1KS\n\
                        AMD Ryzen 7-5700U\n\
                        512GB SSD\n\
                        8GB Ram\n\
                        AMD Radeon RX640 2GB\n\
                        15.6 Inch - DOS\n\
                        Color: gray  =>>  EGP 20,799.00",
        "model": "Acer Aspire 5 A515-45G-R1KS",
        "price": "$700",
        "stock": "20",
        "images": ["./prouducts_photo/Laptops/Acer Aspire 5 A515-45G-R1KS/1.png" ,
                   "./prouducts_photo/Laptops/Acer Aspire 5 A515-45G-R1KS/2.png" ,
                   "./prouducts_photo/Laptops/Acer Aspire 5 A515-45G-R1KS/3.png" ,
                   "./prouducts_photo/Laptops/Acer Aspire 5 A515-45G-R1KS/4.png" ,
                   "./prouducts_photo/Laptops/Acer Aspire 5 A515-45G-R1KS/5.png" ],
        "stars": "4.6",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        Lenovo ThinkPad E14 Gen2\n\
                        Intel Core i7-1165G7\n\
                        512GB SSD\n\
                        8GB Ram\n\
                        Graphics NVIDIA GeForce MX450 2GB\n\
                        Display 14 FHD (1920x1080) IPS 250nits\n\
                        Color  black",
        "model": "Lenovo ThinkPad E14 Gen2",
        "price": "$1,375",
        "stock": "12",
        "images": ["./prouducts_photo/Laptops/LENOVO THINKPAD E14/1.png" ,
                   "./prouducts_photo/Laptops/LENOVO THINKPAD E14/2.png" ,
                   "./prouducts_photo/Laptops/LENOVO THINKPAD E14/3.png" ,
                   "./prouducts_photo/Laptops/LENOVO THINKPAD E14/4.png" ,
                   "./prouducts_photo/Laptops/LENOVO THINKPAD E14/5.png" ],
        "stars": "4.8",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        Lenovo Ideapad Gaming 3\n\
                        Core I7-12650H\n\
                        16G Ram\n\
                        512 NVME\n\
                        VGA Nvidia 4G RTX 3050Ti\n\
                        15.6 FHD 165Hz\n\
                        Color gray",
        "model": "Lenovo Ideapad Gaming 3",
        "price": "$1,482",
        "stock": "5",
        "images": ["./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/1.png" ,
                   "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/2.png" ,
                   "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/3.png" ,
                   "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/4.png" ,
                   "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/5.png" ],
        "stars": "3",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        HP Probook 450 G9\n\
                        Core I5 - 1235U\n\
                        15.6 HD\n\
                        8GB\n\
                        512GB SSD\n\
                        MX570 2GB - DOS\n\
                        color Silver Aluminum",
        "model": "HP Probook 450",
        "price": "$1,335",
        "stock": "6",
        "images": ["./prouducts_photo/Laptops/HP Probook 450/1.png" ,
                   "./prouducts_photo/Laptops/HP Probook 450/2.png" ,
                   "./prouducts_photo/Laptops/HP Probook 450/3.png" ,
                   "./prouducts_photo/Laptops/HP Probook 450/4.png" ,
                   "./prouducts_photo/Laptops/HP Probook 450/5.png" ],
        "stars": "3.5",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        Lenovo Legion 5 Pron\n\
                        Core I7 12700H \n\
                        32G Ram \n\
                        1TB SSD\n\
                        NVME -VGA Nvidia 6G\n\
                        RTX 3060 -16.0\n\
                        WQXGA 165Hz DOS\n\
                        Color Gery = >>  EGP 78,390.00",
        "model": "Lenovo Legion 5 Pro",
        "price": "$2,536",
        "stock": "9",
        "images": ["./prouducts_photo/Laptops/Lenovo Legion 5 Pro/1.png" ,
                   "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/2.png" ,
                   "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/3.png" ,
                   "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/4.png" ,
                   "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/5.png" ],
        "stars": "3.9",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        HP VICTUS 15-FA0031DX\n\
                        CI5 12450H\n\
                        8GB RAM\n\
                        SSD 512GB\n\
                        NVIDIA GTX1650 4GB\n\
                        15.6 FHD IPS 144HZ -WIN11\n\
                        Color SILVER   =>>  EGP 32,797.00",
        "model": "HP VICTUS 15",
        "price": "$1,061",
        "stock": "15",
        "images": ["./prouducts_photo/Laptops/HP VICTUS 15/1.png" ,
                   "./prouducts_photo/Laptops/HP VICTUS 15/2.png" ,
                   "./prouducts_photo/Laptops/HP VICTUS 15/3.png" ,
                   "./prouducts_photo/Laptops/HP VICTUS 15/4.png" ,
                   "./prouducts_photo/Laptops/HP VICTUS 15/5.png" ],
        "stars": "4.3",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        Acer Aspire 5 A515-57G-70GT\n\
                        Core I7-1260P\n\
                        15.6 Inch FHD\n\
                        512GB SSD\n\
                        8GB RAM\n\
                        RTX 2050 FREEDOS\n\
                        Color Grey   =>> EGP 33,459.18",
        "model": "Acer Aspire 5 A515-57G-70GT",
        "price": "$1,082",
        "stock": "14",
        "images": ["./prouducts_photo/Laptops/Acer Aspire 5 A515-57G-70GT/1.png" ,
                   "./prouducts_photo/Laptops/Acer Aspire 5 A515-57G-70GT/2.png" ,
                   "./prouducts_photo/Laptops/Acer Aspire 5 A515-57G-70GT/3.png" ,
                   "./prouducts_photo/Laptops/Acer Aspire 5 A515-57G-70GT/4.png" ,
                   "./prouducts_photo/Laptops/Acer Aspire 5 A515-57G-70GT/5.png" ],
        "stars": "4.4",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        Lenovo Legion 7 16ITHg6\n\
                        16'WQXGA Intel Core™ i7-11800H\n\
                        2TB SSD\n\
                        32GB DDR4\n\
                        NVIDIA® GeForce RTX™ 3080\n\
                        Color Selver",
        "model": "Lenovo Legion 7 16ITHg6",
        "price": "$2,565",
        "stock": "3",
        "images": ["./prouducts_photo/Laptops/Lenovo Legion 7 16ITHg6/1.png" ,
                   "./prouducts_photo/Laptops/Lenovo Legion 7 16ITHg6/2.png" ,
                   "./prouducts_photo/Laptops/Lenovo Legion 7 16ITHg6/3.png" ,
                   "./prouducts_photo/Laptops/Lenovo Legion 7 16ITHg6/4.png" ,
                   "./prouducts_photo/Laptops/Lenovo Legion 7 16ITHg6/5.png" ],
        "stars": "4.9",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        HP Spectre X360 14-ef2013dx\n\
                        Core I7-1355U\n\
                        16G Ram\n\
                        512G NVMe-Intel Iris Xe Graphics\n\
                        13.5 WUXGA Touch-Win 11 Home\n\
                        Color Black  =>> EGP 84,980.00",
        "model": "HP Spectre X360 14-ef2013dx",
        "price": "$2,750",
        "stock": "7",
        "images": ["./prouducts_photo/Laptops/HP Spectre X360 14-ef2013dx/1.png" ,
                   "./prouducts_photo/Laptops/HP Spectre X360 14-ef2013dx/2.png" ,
                   "./prouducts_photo/Laptops/HP Spectre X360 14-ef2013dx/3.png" ,
                   "./prouducts_photo/Laptops/HP Spectre X360 14-ef2013dx/4.png" ,
                   "./prouducts_photo/Laptops/HP Spectre X360 14-ef2013dx/5.png" ],
        "stars": "4.7",
    },
    {
        "type": "laptop",
        "description": "Details\n\
                        Lenovo IdeaPad Slim 3 15IAH8\n\
                        15.6 FHD\n\
                        Intel® Core™ i5-12450H 8 Core\n\
                        8GB DDR5\n\
                        512GB-SSD\n\
                        Intel® UHD Graphics\n\
                        color Arctic Grey  =>> EGP 27,615.00",
        "model": "Lenovo IdeaPad Slim 3 15IAH8",
        "price": "$893",
        "stock": "19",
        "images": ["./prouducts_photo/Laptops/Lenovo IdeaPad Slim 3 15IAH8/1.png" ,
                   "./prouducts_photo/Laptops/Lenovo IdeaPad Slim 3 15IAH8/2.png" ,
                   "./prouducts_photo/Laptops/Lenovo IdeaPad Slim 3 15IAH8/3.png" ,
                   "./prouducts_photo/Laptops/Lenovo IdeaPad Slim 3 15IAH8/4.png" ,
                   "./prouducts_photo/Laptops/Lenovo IdeaPad Slim 3 15IAH8/5.png" ],
        "stars": "3.6",
    },
]



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
});




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