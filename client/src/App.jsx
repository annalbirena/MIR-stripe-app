import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Checkout from './pages/CheckoutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
