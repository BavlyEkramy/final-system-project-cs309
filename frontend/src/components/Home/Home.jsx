const Home = () => {
  return (
    <>
    <div className="home">
      {products && <Product Allproduct={products} IsVendor={false} />}
    </div>
    </>
  );
}

export default Home;