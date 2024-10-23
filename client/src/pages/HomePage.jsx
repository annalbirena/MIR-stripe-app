import ProductList from '../components/ProductList';
import ShoppingCart from '../components/ShopingCart';

function Home() {
  return (
    <div>
      <ShoppingCart />
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}

export default Home;
