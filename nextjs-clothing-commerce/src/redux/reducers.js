const initialState = {
    cartItems: [],
    count: 0
};
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        console.log(state.cartItems,"I am Cart items",state.count,"I am state")
        let check = true
        if(state.cartItems)
          state.cartItems.map((data)=>{
            if(data === action.payload)
              check = false;
          })
        if(check)
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
            count: parseInt(state.count)+1
          };
        else
          return state;

      case 'DECREMENT':
        return {
          ...state,
          count: parseInt(state.count-1)
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;