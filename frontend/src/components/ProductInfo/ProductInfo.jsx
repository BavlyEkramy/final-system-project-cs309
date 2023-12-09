import * as React from 'react';
import  '../footer/index.css';
import'./index.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../Header/Header';
import {Slider} from "../slider/Slider";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import  { useState , useEffect } from 'react';
import {useParams} from"react-router-dom"
import item from "../Product/item"
import Product from '../Product/item';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



    
   
    
export default function ProductInfo() {

    let slides= [
        {
            "src": "https://picsum.photos/seed/picsum1/600/400",
            "alt": "Image 1 for carousel"
        },
        {
            "src": "https://picsum.photos/seed/picsum2/600/400",
            "alt": "Image 2 for carousel"
        }, {
            "src": "https://picsum.photos/seed/picsum3/600/400",
            "alt": "Image 3 for carousel"
        }
        , {
            "src": "https://picsum.photos/seed/picsum4/600/400",
            "alt": "Image 4 for carousel"
        }
    ]
    
//    const api_url =  [{
//     productID :"1",
//     type: "laptop",
//     description: "Details\n\
//                         Lenovo ThinkPad E14 Gen2\n\
//                         Intel Core i7-1165G7\n\
//                         512GB SSD\n\
//                         8GB Ram\n\
//                         Graphics NVIDIA GeForce MX450 2GB\n\
//                         Display 14 FHD (1920x1080) IPS 250nits\n\
//                         Color  black",
//     model: "Lenovo ThinkPad E14 Gen2",
//     price: "$1,375",
//     stock: "12",
//     images: ["./prouducts_photo/Laptops/LENOVO THINKPAD E14/1.png",
//       "./prouducts_photo/Laptops/LENOVO THINKPAD E14/2.png",
//       "./prouducts_photo/Laptops/LENOVO THINKPAD E14/3.png",
//       "./prouducts_photo/Laptops/LENOVO THINKPAD E14/4.png",
//       "./prouducts_photo/Laptops/LENOVO THINKPAD E14/5.png"],
//     stars: "4.8",
//   },
//     {
//       productID :"2",
//       type: "laptop",
//       description: "Details\n\
//                         Lenovo Ideapad Gaming 3\n\
//                         Core I7-12650H\n\
//                         16G Ram\n\
//                         512 NVME\n\
//                         VGA Nvidia 4G RTX 3050Ti\n\
//                         15.6 FHD 165Hz\n\
//                         Color gray",
//       model: "Lenovo Ideapad Gaming 3",
//       price: "$1,482",
//       stock: "5",
//       images: ["./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/1.png",
//         "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/2.png",
//         "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/3.png",
//         "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/4.png",
//         "./prouducts_photo/Laptops/Lenovo Ideapad Gaming 3/5.png"],
//       stars: "3",
//     },
//     {
//       productID :"3",
//       type: "laptop",
//       description: "Details\n\
//                         HP Probook 450 G9\n\
//                         Core I5 - 1235U\n\
//                         15.6 HD\n\
//                         8GB\n\
//                         512GB SSD\n\
//                         MX570 2GB - DOS\n\
//                         color Silver Aluminum",
//       model: "HP Probook 450",
//       price: "$1,335",
//       stock: "6",
//       images: ["./prouducts_photo/Laptops/HP Probook 450/1.png",
//         "./prouducts_photo/Laptops/HP Probook 450/2.png",
//         "./prouducts_photo/Laptops/HP Probook 450/3.png",
//         "./prouducts_photo/Laptops/HP Probook 450/4.png",
//         "./prouducts_photo/Laptops/HP Probook 450/5.png"],
//       stars: 3.5,
//     },
//     {
//       productID :"4",
//       type: "laptop",
//       description: "Details\n\
//                         Lenovo Legion 5 Pron\n\
//                         Core I7 12700H \n\
//                         32G Ram \n\
//                         1TB SSD\n\
//                         NVME -VGA Nvidia 6G\n\
//                         RTX 3060 -16.0\n\
//                         WQXGA 165Hz DOS\n\
//                         Color Gery = >>  EGP 78,390.00",
//       model: "Lenovo Legion 5 Pro",
//       price: "$2,536",
//       stock: "9",
//       images: ["./prouducts_photo/Laptops/Lenovo Legion 5 Pro/1.png",
//         "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/2.png",
//         "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/3.png",
//         "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/4.png",
//         "./prouducts_photo/Laptops/Lenovo Legion 5 Pro/5.png"],
//       stars: "3.9",
//     }]
//       const[product , setProduct] = useState({})
//     const params = useParams();
//     console.log(params.ProductsId);
//     useEffect(() => {
//         fetch(`${api_url}/${params.ProductsId}`).then((res) => res.json().then((product) => setProduct(product)))
//     } ,[])



    const [cartItems, setCartItems] = useState([]);
    function handleClick(item) {
        if (cartItems.includes(item)) {
          setCartItems(cartItems.filter(i => i !== item));
          alert("removed from Cart!");
        } else {
          setCartItems([...cartItems, item]);
          alert("Added to Cart!");
        }
     }
     function SaveClick(item) {
        if (cartItems.includes(item)) {
          setCartItems(cartItems.filter(i => i !== item));
          alert("Un saved ");
        } else {
          setCartItems([...cartItems, item]);
          alert(" Saved ");
        }
     }
     function FavouriteClick(item) {
        if (cartItems.includes(item)) {
          setCartItems(cartItems.filter(i => i !== item));
          alert("Removed from  Favourite");
        } else {
          setCartItems([...cartItems, item]);
          alert(" Favourite ");
        }
     }
 return(
  <>
{/* <h1>
    ProductInfo - {product.title} {product.id}
</h1> */}
  <Header/>
   <Slider className = "Slider_pro"/>
   <main className='main'>
        <section className="specs">
            <h2>Tech Specs</h2>
            <ul>
                <li>Windows 11 Pro</li>
                <li>AMD Ryzen 9 7940HS processor</li>
                <li>NVIDIA GeForce RTX 4090 Laptop GPU at 125W Max TGP</li>
                <li>16GB of high-speed DDR5-4800MHz memory</li>
                <li>1TB of PCIe 4x4 storage with a raw throughput up to 7000mb / s</li>
            </ul>
        </section>
        <section className="features">
            <h2>Features</h2>
            <ul>
                <li>ROG NEBULA HDR DISPLAY</li>
                <li>PORTABLE AND STYLISH</li>
                <li>ROG INTELLIGENT COOLING</li>
                <li>MUX SWITCH WITH ADVANCED OPTIMUS</li>
            </ul>
        </section>
        </main>
        <div className ="footer_pro">
        <Footer />
        </div>
   
   <div className="card">
        <div className="product-avelable">
            <div className="icon-del"><i class="fas fa-boxes"></i></div>
            <div className="info">
                <h2>Delivery</h2>
                <p>Most orders ship out within 24 hours</p>
            </div>    
        </div>
        <div className="price">
            <div className= "Show-price">
                <div className="Number_price">
                    <h2>$1500<del>$2000</del></h2>
                    <div className="icon_price">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard fa-sm" ></i>
                        <i class="fab fa-paypal"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="about_product">
            <div className="about_icon">
            <Checkbox className="makeFavor" onClick={() => FavouriteClick('Item 1')}{...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox className="saveForLater" onClick={() => SaveClick('Item 1')}{...label}icon={<BookmarkBorderIcon />}checkedIcon={<BookmarkIcon />}/>
             {/*<Button variant="contained" onClick={handleClick}>Add To Cart</Button> */}
            <div className="App">
            <Button variant="contained" onClick={() => handleClick('Item 1')}>Add To Cart</Button>

            {/* 
            but the product in a div and remove from it 
            <div className="Cart-Items">
                <h2>Cart Items</h2>
                <ul>
                    {cartItems.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </div> */}
      
    </div>
            </div>     
        </div>
        
    
    </div>
  </>
 ) ;
  
}






// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { getCookie } from './utilities';

// const AddToCart = ({ productId, maxAllowed }) => {
//  const [quantity, setQuantity] = useState(1);

//  const addToCart = async () => {
//     if (quantity < 1 || quantity > maxAllowed) {
//       toast.error('Quantity should be between 1 and ' + maxAllowed);
//       return;
//     }

//     try {
//       const csrfToken = getCookie('csrf_token');
//       const response = await fetch(`/api/addtocart/${productId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'csrf-token': csrfToken,
//         },
//         body: JSON.stringify({ quantity }),
//       });

//       if (response.ok) {
//         toast.success('Added to cart successfully');
//       } else {
//         const errorMessage = await response.text();
//         toast.error(errorMessage);
//       }
//     } catch (error) {
//       toast.error('Error adding to cart: ' + error.message);
//     }
//  };

//  return (
//     <div>
//       <div classNameName="product-quantity">
//         <input
//           type="number"
//           value={quantity}
//           onChange={(e) => setQuantity(parseInt(e.target.value))}
//           min="1"
//           max={maxAllowed}
//         />
//       </div>
//       <button classNameName="product-addtocart-button" onClick={addToCart}>
//         Add to Cart
//       </button>
//     </div>
//  );
// };

// export default AddToCart;
