/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../context/store';
import getProducts from '../../services/products';

function ProductList() {
  const { state, dispatch } = useStoreContext();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      dispatch({ type: 'SET_PRODUCTS', payload: products });
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      {state.products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
