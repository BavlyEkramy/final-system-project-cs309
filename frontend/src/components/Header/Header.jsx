import './index.css';
import List from '../List/List';
import { useState } from 'react';

import {Link} from "react-router-dom";
import Search from '../Search/Search';

import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = props => {
	const [login, setLogin] = useState(true);
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
    <header>
		<div className="container flex-box">
			<div className="logo">
				<img src="images/logo.jpg" alt="logo" />
			</div>
			<nav className="flex-box">
				<ul>
					<li><Link to="/home">Home</Link></li>
							<li><Link to="/cart">Cart </Link>
								<Badge badgeContent={4} color="primary">
									<ShoppingCartIcon />
								</Badge>
							</li>
					<li><Link to="/vendor">Vendor</Link></li>
        </ul>
			</nav>
			<Search />
			<div className='sign flex-box'>
				{!login ?
					
					<Link to='/signin'>Sign in</Link>
					
					:
					<>
					<div className='username'>Name</div>
					<input type='button' value='log out' onClick={()=> {
						setLogin(false);
					}}/>
					</>
				}
			</div>
			<div className="menu-icon">
				<img src='images/burger-icon.jpg' onClick={()=> {setShowMenu(true)}} />
			</div>
		</div>
	</header>
	{showMenu && <List login={login} setLogin={setLogin} show={setShowMenu}/>}
	</>
  );
};

export default Header;