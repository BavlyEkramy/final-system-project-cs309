import Search from '../Search/Search';
import './index.css';
import { Link } from "react-router-dom";

const List = props => {
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
        {!props.login ?
          <>
          <li><Link to='/signin'>Sign in</Link></li>
          </>
          :
          <>
          <li><div className='username'>Name</div></li>
          <li><input className='log-out' type='button' value='log out' onClick={()=> {
            props.setLogin(false);
          }}/></li>
          </>
        }
      </ul>
    </div>
  );
}

export default List;