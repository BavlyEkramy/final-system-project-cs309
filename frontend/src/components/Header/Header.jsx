import './index.css';
import List from '../List/List';
import { useContext, useState } from 'react';

import {Link} from "react-router-dom";
import Search from '../Search/Search';

import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserContext from '../../Services/UserContext';

const Header = props => {
	const {isLogin, setLogin, userData, setUserData} = useContext(UserContext);
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

							<li><Link to={ROUTES.VENDOR}>Vendor</Link></li>
						</ul>
					</nav>
					<Search placeholder="Search" sx={{ mr: 50 }} />
					<div className='sign flex-box'>
						{!isLogin ?
							<Link to={ROUTES.SIGN_IN}>Sign in</Link>
							:
							<>
								<Link to={ROUTES.PROFILE}>
									<div className='user'>
										{
											userData &&
											<>
												<Avatar alt='personal-image' src='images/personal_image.jpg' sx={{ width: 26, height: 26, mr: 1 }} />
												{/* {(userData.firstName != "" && userData.firstName) ? */}
												{/* <span>{userData.firstName}</span> */}
												<span>{userData.email.substring(0, userData.email.indexOf('@'))}</span>
											</>
										}
									</div>
								</Link>
								<input type='button' value='log out' onClick={() => {
									setLogin(false);
									setUserData(null);
								}} />
							</>
						}
					</div>
					<div className="menu-icon" onClick={() => { setShowMenu(true) }}>
						<MenuIcon />
					</div>
				</div>
			</header>
			{showMenu && <List show={setShowMenu} />}
		</>
	);

};

export default Header;