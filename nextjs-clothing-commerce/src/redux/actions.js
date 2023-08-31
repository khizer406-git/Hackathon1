// src/redux/actions.js
export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export const addItem = (Product) => ({
  payload: Product,
  type: 'INCREMENT',
});

export const subtractItem = () => ({
  type: 'DECREMENT',
});