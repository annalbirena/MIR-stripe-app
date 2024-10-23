import CartList from './CartList';
import CheckoutButton from './CheckoutButton';
import { useStoreContext } from '../../context/store';

function ShoppingCart() {
  const { state } = useStoreContext();

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-header">
        <i className="fa fa-shopping-cart cart-icon" />
        <h3>Cantidad de items: {state.cart.length}</h3>
      </div>
      <CartList />
      <CheckoutButton />
    </div>
  );
}

export default ShoppingCart;
