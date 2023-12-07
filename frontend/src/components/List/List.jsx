import Search from '../Search/Search';
import './index.css';
import { Link } from "react-router-dom";
import UserContext from '../../Services/UserContext';
import { useContext } from 'react';

const List = props => {
  const {isLogin, setLogin, userData, setUserData} = useContext(UserContext);
  return (
    <div className='list'>
      <div className="close">
      <input className='close-btn' type='button' value='X' onClick={() => props.show(false)}/>
      </div>
      <Search placeholder="Search for products"/>
      <ul className='myList' onClick={() => props.show(false)}>
        {!isLogin?
          <li><Link to='/signin'>Sign in</Link></li>
          :
          <li><div className='username'>{userData ? userData.email : "Name"}</div></li>
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