import { useStoreContext } from '../../context/store';
import ItemCart from './ItemCart';

function CartList() {
  const { state } = useStoreContext();

  return (
    <div className="shopping-cart-items">
      {state.cart.map((item) => (
        <ItemCart key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartList;
