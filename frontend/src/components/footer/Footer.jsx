import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AboutPage from '../AboutUS/AboutPage ';
import LinkPage from '../AboutUS/LinkPage';

const Footer = () => {
  return (
    <>
    <footer className = "footer"> 
        <div className="container"> 
            <div className="story">
                <h3>About Us</h3>
               <ul>
                <li><Link  className ="story-item" to ='/vendor' >Vendor</Link></li>
                <li><Link className ="story-item" to ='/cart'>cart</Link></li>
                <li><Link className ="story-item" to ='/about'>about</Link></li>
                </ul>
                  
                
                {/* <AboutPage/> */}
                {/* <LinkPage/> */}
                {/* <a href='../AboutUS/AboutPage.jsx' target='blank'>story</a> */}
                {/* <Link to="/about" className="btn btn-primary">See Profile</Link> */}
                
                </div> 
            <div className="services">
                <h3>Services</h3>
                    <ul>
                        <li>Marketing </li>
                        <li>Consulting</li>
                        <li>Development</li>
                        <li>Design</li> 
                    </ul> 
            </div> 
            <div className="contact">
                <h3>Contact Us</h3>
                    <ul>
                        <li>United States</li> 
                        <li>United Kingdom</li> 
                        <li>Australia</li>
                        <li>Egypt</li> 
                        <li>Support</li>
                    </ul> 
            </div>
            <div className="Social">
                <h3>Social</h3>
                    <ul>
                        <li><a href='https://www.facebook.com/login.php/' target='blank'><i className="fab fa-facebook"></i></a> </li>
                        <li><a href='https://www.instagram.com/accounts/login/?hl=ar' target='bank'><i className="fab fa-instagram"></i></a></li>
                        <li><a href='https://www.youtube.com/watch?v=MiWCJAw-BmU' target='blank'><i className="fab fa-youtube"></i></a></li>
                        <li><a href='https://www.tiktok.com/login' target='blank'><i className="fab fa-tiktok"></i></a></li>
                        <li><a href='https://edgeup.asus.com/' target='blank'><i className="fab fa-edge"></i></a></li>
                    </ul>
                </div>
        </div>
     </footer>
     </>
  );
};

export default Footer;
