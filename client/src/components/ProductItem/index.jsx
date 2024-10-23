/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import { useStoreContext } from '../../context/store';

function ProductItem({ product }) {
  const { name, price, img } = product;
  const { dispatch } = useStoreContext();

  const addToCart = (p) => {
    dispatch({ type: 'ADD_TO_CART', payload: p });
  };

  return (
    <div className="product-card">
      <img src={img} alt={`product ${name}`} width="70" height="70" />
      <p className="item-name">{name}</p>
      <p className="item-price">${price}</p>
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
