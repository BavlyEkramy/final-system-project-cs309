import './index.css';

const Cart = () => {
  return (
    <div className='cart'>
      {userProducts && <Product Allproduct={userProducts} IsVendor="false" />}
    </div>
  );
}

export default Cart;