/* eslint-disable react/button-has-type */
import { useNavigate } from 'react-router-dom';

function CheckoutButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
  };

  return (
    <button className="button" onClick={handleClick}>
      Checkout
    </button>
  );
}

export default CheckoutButton;
