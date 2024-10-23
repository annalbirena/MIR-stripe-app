/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from '../utils/reducer';

const StoreContext = createContext();

const initialState = {
  products: [],
  cart: [],
  total: 0,
  isLoading: false,
  error: null,
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useStoreContext must be used within a StoreProvider');
  }

  return context;
};
