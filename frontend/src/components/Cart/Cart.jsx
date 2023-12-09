import './index.css';

const Cart = () => {
  return (
    <div className='cart'>
      {userProducts != 'Empity' && <Product Allproduct={userProducts} IsVendor={false} isCart={true}/>}
    </div>
  );
}

export default Cart;