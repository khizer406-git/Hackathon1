const initialState = {
    cartItems: []
};
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };
      case 'DECREMENT':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };
      default:
        return state;

    }
  };
  
  export default rootReducer;