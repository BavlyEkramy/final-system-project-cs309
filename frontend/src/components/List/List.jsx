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
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/vendor">Vendor</Link></li>
        {isLogin?
          <>
          <li><Link to='/signin'>Sign in</Link></li>
          </>
          :
          <>
          <li><div className='username'>Name</div></li>
          <li><input className='log-out' type='button' value='log out' onClick={()=> {
            setLogin(false);
          }}/></li>
          </>
        }
      </ul>
    </div>
  );
}

export default List;