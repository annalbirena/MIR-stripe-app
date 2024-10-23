/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function ItemCart({ item }) {
  const { name, price, img, quantity = 1 } = item;
  return (
    <div className="clearfix">
      <img src={img} alt={`product ${name}`} />
      <span className="item-name">{name}</span>
      <span className="item-price">${price}</span>
      <span className="item-quantity">Quantity: {quantity}</span>
    </div>
  );
}

ItemCart.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
};

export default ItemCart;
