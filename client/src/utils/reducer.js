function reducer(state, action) {
  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      products: action.payload,
    };
  }

  if (action.type === 'ADD_TO_CART') {
    const newProduct = action.payload;
    const newCart = [...state.cart, newProduct];
    const total = newCart.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);

    return {
      ...state,
      cart: newCart,
      total,
    };
  }

  return state;
}

export default reducer;
