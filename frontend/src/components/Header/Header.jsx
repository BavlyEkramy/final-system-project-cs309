import './index.css';
import List from '../List/List';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Search from '../Search/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserContext from '../../Services/UserContext';


const Header = props => {
	const { isLogin, setLogin, userData, setUserData } = useContext(UserContext);
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
					<Search placeholder="Search for products" />
					<div className='sign flex-box'>
						{!isLogin ?
							<Link to='/signin'>Sign in</Link>
							:
							<>
								<div className='username'>{userData ? userData.email : "Name"}</div>
								<input type='button' value='log out' onClick={() => {
									setLogin(false);
									setUserData(null);
								}} />
							</>
						}
					</div>
					<div className="menu-icon">
						<img src='images/burger-icon.jpg' onClick={() => { setShowMenu(true) }} />
					</div>
				</div>
			</header>
			{showMenu && <List show={setShowMenu} />}
		</>
	);
};

export default Header;