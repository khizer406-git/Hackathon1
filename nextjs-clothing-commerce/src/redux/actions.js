export const addItem = (name) => ({
  payload: name,
  type: 'INCREMENT',
});

export const subtractItem = () => ({
  type: 'DECREMENT',
});

export const search = (data) => (  {
  payload: data,
  type: 'SEARCH'
})