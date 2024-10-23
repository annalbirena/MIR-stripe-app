import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CartList from '../components/ShopingCart/CartList';
import { useStoreContext } from '../context/store';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51LNh86LN49PLvmtQgKeSK0YVPIeHSb5LnNrCcngns3moyIC3xNQkrdbubwQwDErE7NzPWLf6FTnHad4lSJActbcu00MyPZba0f',
);

function Checkout() {
  const { state } = useStoreContext();
  return (
    <div>
      <div className="container">
        <div>
          <h1>Product List</h1>
          <CartList />
        </div>

        <div>
          <h2>Total</h2>
          <h3>Price: ${state.total}</h3>
        </div>
        <br />
        <br />

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

export default Checkout;
