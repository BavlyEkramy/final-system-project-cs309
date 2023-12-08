import Search from '../Search/Search';
import './index.css';
import { Link } from "react-router-dom";
import UserContext from '../../Services/UserContext';
import { useContext } from 'react';
import { Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as ROUTES from '../../constants/routes';

const List = props => {
  const {isLogin, setLogin, userData, setUserData} = useContext(UserContext);
  return (
    <div className='list'>
      <div className="close">
      <div className='close-btn' onClick={() => props.show(false)}>
        <CloseIcon />
      </div>
      </div>
      <Search placeholder="Search for products"/>
      <ul className='myList' onClick={() => props.show(false)}>
        {!isLogin?
          <li><Link to='/signin'>Sign in</Link></li>
          :
          <li>
            <Link to={ROUTES.PROFILE}>
              <div className='user flex-box'>
              {
                userData &&
                <>
                  <Avatar alt='personal-image' src='images/personal_image.jpg' />
                  <span>{userData.email.substring(0, userData.email.indexOf('@'))}</span>
                </>
              }
              </div>
					  </Link>
          </li>
        }
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/vendor">Vendor</Link></li>
        {isLogin &&
          <li><input className='log-out' type='button' value='log out' onClick={()=> {
            setLogin(false);
            setUserData(null);
          }}/></li>}
      </ul>
    </div>
  );
}

export default List;