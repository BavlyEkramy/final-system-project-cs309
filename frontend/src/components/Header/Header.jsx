import './index.css';
import List from '../List/List';
import { useState } from 'react';

import {Link} from "react-router-dom";

const productsKinds = ["Laptops", "Screens", "Phones"];

const Header = props => {
	const [popup, setPopup] = useState(false);
	const [login, setLogin] = useState(false);
	return (
    <header>
		<div className="container flex-box">
			<div className="logo">
				<img src="../../../public/images/logo.jpg" alt="logo" />
			</div>
			<nav className="flex-box">
				<ul>
					<li><a href="/home">Home</a></li>
					<li className="products-li"
						onMouseEnter={() => {
							setPopup(true);
						}}
						onMouseLeave={() => {
							setPopup(false);
						}}
						
					>
						<a href="/products">products</a>
						{popup && <List items={productsKinds}
						onMouseEnter={() => {
							setPopup(true);
						}}
						 onMouseLeave={() => {
							setPopup(false);
						}}/>}
					</li>
        </ul>
			</nav>
			<div className='sign flex-box'>
				{!login ?
					<>
					<input type='button' value='Sign in' />
					<input type='button' value='Sign up' onClick={()=> {
						setLogin(true);
					}}/>
					</>
					:
					<>
					<div className='username'>Name</div>
					<input type='button' value='log out' onClick={()=> {
						setLogin(false);
					}}/>
					</>
				}
			</div>
		</div>
	</header>
  );
};

export default Header;